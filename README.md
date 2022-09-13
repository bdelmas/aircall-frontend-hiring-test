# Aircall Challenge

TLDR: `yarn p` and `yarn c`.

When you run the challenge, be sure to run it in production mode (`yarn p`). If you want to run it in `dev` mode, remember that it is running with the `strict mode` on so some bugs in `dev` mode may appear but won't appear in `prod`.

Because `strict mode` is used in `dev` mode, there is discrepencies between `prod` and `dev`, because React will treat the lifecycle more strictly. React does it to be able to spot lifecycle bugs more easily. But it can also add bugs on it's on because of that lifecycle change. You can see the effect for instance on this challenge. If you run it in `dev` mode some API calls will be done twice. But if you run it in `prod` mode with `yarn p` all API calls will done as expected and will be called only once.

To see more about this, you can check the React documentation of `strict mode` [here](https://reactjs.org/docs/strict-mode.html).

This [link](https://stackoverflow.com/a/60619061) from Stackoverflow summaries it:

>StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).


## Project Structure
The project is using the `features` and `pages` file structure with DDD and Screaming Architecture. A good intro can be found [here](https://profy.dev/article/react-folder-structure#discussion-feature-driven-folder-structure-and-screaming-architecture).

The project has an:

- `app` folder, everything about the app should be there (main store, main saga, libs, utils...),
- `features` folder, cut as much as possible by domain with DDD,
- `pages` folder, contains the different pages of the app,
- `ui` folder, contains the themes and every component big or small that are shared accross the app.
- `cypress` folder, contains the e2e tests of all features of the app.

The `ui` folder is here in substitute of the more common `components` folder to be able to have more granularity and specification to the different ways what a component can be. On a big project `components` will be quickly packed, but a `ui` folder with the atomic design approach solves that problem and make it easier and more manageable even with a big project with lots of components.

Finally it uses `kebab-case` to name files and folders instead of the more common `camelCase`/`PascalCase` to avoid to have to pull your hair once or twice every year because `cameCase` [broke your CI/CD pipeline](https://twitter.com/kentcdodds/status/1249870276688371713).


## Desktop and Mobile
All screens starting from `375px` and higher are supported. It's the Mobile M screen on Chrome DevTools.

## Features
Just to give you a quick overview of what was done and not done so you won't have to spend so much time trying to figure it out.

What is missing:
- Group calls by date,
- Handle real-time events (Whenever a call is archived or a note is being added to a call, these changes should be reflected on the UI immediately) I tried but I can't seem to make it work so far.

What is done:
- Display a paginated list of calls that you’ll retrieve from the API,
- Display the call details view if the user clicks on a call. the view should display all the data related to the call itself,
- Be able to archive one or several calls. (In case it's not obvious, it's the little purple or light grey icon box on the right. Both present on the index and the details view of the call. You can click on it.),
- Use Typescript,
- There is a breadcrumb menu where there is the blue home,
- Sign-in page, and logout,
- Cookies,
- This little documentation,
- Tests, like I said to Boris I know many things but I do have to learn how to do testing in React. I actually learn to use Cypress today and wow! It is such a cool tool to use so here we go E2E tests done!
- Good architecture principles applied in this app with all its bells and wisles (thunks and saga, features folders, atomic design, DDD, cypress...),
- And not too shabby UI/UX design with mobile (+ 375px screen width) and desktop designs being supported.


----

## Available Scripts

### `yarn s` or `yarn start`

Runs the app in the `development` mode.

### `yarn p`
Runs the app in the `production` mode.

### `yarn pp`
Runs the app in the `production` mode, with the `profile` option on.

### `yarn c`
Runs Cypress.

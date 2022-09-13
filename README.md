# Aircall Challenge

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

The `ui` folder is here in substitute of the more common `components` folder to be able to have more granularity and specification to the different ways what a component can be. On a big project `components` will be quickly packed, but a `ui` folder with the atomic design approach solves that problem and make it easier and more manageable even with a big project with lots of components.

Finally it uses `kebab-case` to name files and folders instead of the more common `camelCase`/`PascalCase` to avoid to have to pull your hair once or twice every year because `cameCase` [broke your CI/CD pipeline](https://twitter.com/kentcdodds/status/1249870276688371713).


## Desktop and Mobile
All screens starting from `375px` and higher are supported. It's the Mobile M screen on Chrome DevTools.

## Features
What is missing:
- Group calls by date
- Handle real-time events (Whenever a call is archived or a note is being added to a call, these changes should be reflected on the UI immediately) I tried but I can't seem to make it work so far.
- Tests, like I said to Boris I know many things but I do have to learn how to do testing in React.

What is done:
- Display a paginated list of calls that you’ll retrieve from the API.
- Display the call details view if the user clicks on a call. the view should display all the data related to the call itself.
- Be able to archive one or several calls. (In case it's not obvious, it's the little purple or light grey icon box on the right. Both present on the index and the details view of the call. You can click on it.)
- Use Typescript.
- There is a breadcrumb menu where there is the blue home.
- Sign-in page, and logout.
- Cookies.
- This little documentation
- Good architecture app with its belts and wisles (thunks, saga, features folders, atomic design, DDD...).
- And not too shabby UI/UX design with mobile (+ 375px screen width) and desktop design being supported.


----

## Available Scripts

### `yarn s` or `yarn start`

Runs the app in the `development` mode.

### `yarn p`
Runs the app in the `production` mode.

### `yarn pp`
Runs the app in the `production` mode, with the `profile` option on.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

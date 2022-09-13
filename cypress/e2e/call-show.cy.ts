describe("call show", () => {
  it("should be able to go to the details page and come back", function () {
    cy.visit("http://localhost:3000/sign-in");

    // Login
    const username = "benjamin";
    const password = "so secret password";

    cy.findByRole("textbox", { name: /username/i }).type(username);
    cy.get("#outlined-adornment-password").type(password);
    cy.findByRole("button", { name: /sign in/i }).click();

    // Got to details page
    cy.get('[data-test-id="CallItemComponent"]').first().click();

    cy.findByRole("heading", { name: /call details/i }).should("be.visible");

    // Go back to call list
    cy.get('[data-testid="CottageIcon"]').click();

    cy.findByRole("heading", { name: /calls list/i }).should("be.visible");

    // Logout
    cy.get('[data-testid="LogoutIcon"] > path').click();

    cy.findByRole("heading", { name: /welcome back/i }).should("be.visible");
  });

  it("should be able to archive and unarchive the call", function () {
    cy.visit("http://localhost:3000/sign-in");

    // Login
    const username = "benjamin";
    const password = "so secret password";

    cy.findByRole("textbox", { name: /username/i }).type(username);
    cy.get("#outlined-adornment-password").type(password);
    cy.findByRole("button", { name: /sign in/i }).click();

    // Redirected to call list
    cy.findByRole("heading", { name: /calls list/i }).should("be.visible");

    // Got to the details page
    cy.get('[data-test-id="CallItemComponent"]').first().click();

    cy.findByRole("heading", { name: /call details/i }).should("be.visible");

    // Archive/Unarchive

    // Get the first that comes by
    cy.get('[data-test-id="ArchiveIconComponent"]').then((e) => {
      // Store if it is an archive or unarchive icon.
      // For our data ids in the app we use the attr `data-test-id`
      // and miu uses `data-testid` so there are not overriding each other.
      const iconType = e[0].dataset.testid;

      // Click on element
      cy.get('[data-test-id="ArchiveIconComponent"]').click();

      // Cypress is too fast
      cy.wait(500);

      // Check if the icon changed
      cy.get('[data-test-id="ArchiveIconComponent"]')
        .invoke("attr", "data-testid")
        .should("not.equal", iconType);
    });

    // Repeat the Archive/Unarchive to do the opposite now
    cy.get('[data-test-id="ArchiveIconComponent"]').then((e) => {
      // Store if it is an archive or unarchive icon.
      // For our data ids in the app we use the attr `data-test-id`
      // and miu uses `data-testid` so there are not overriding each other.
      const iconType = e[0].dataset.testid;

      // Click on element
      cy.get('[data-test-id="ArchiveIconComponent"]').click({ force: true });

      // Cypress is too fast
      cy.wait(500);

      // Check if the icon changed
      cy.get('[data-test-id="ArchiveIconComponent"]')
        .invoke("attr", "data-testid")
        .should("not.equal", iconType);
    });

    // Logout
    cy.get('[data-testid="LogoutIcon"] > path').click();

    cy.findByRole("heading", { name: /welcome back/i }).should("be.visible");
  });

  it("should be able to sign-in and logout from the details page", function () {
    cy.visit("http://localhost:3000/sign-in");

    // Login
    const username = "benjamin";
    const password = "so secret password";

    cy.findByRole("textbox", { name: /username/i }).type(username);
    cy.get("#outlined-adornment-password").type(password);
    cy.findByRole("button", { name: /sign in/i }).click();

    // Redirected to call list
    cy.findByRole("heading", { name: /calls list/i }).should("be.visible");

    // Got to the details page
    cy.get('[data-test-id="CallItemComponent"]').first().click();

    cy.findByRole("heading", { name: /call details/i }).should("be.visible");

    // Logout
    cy.get('[data-testid="LogoutIcon"] > path').click();

    cy.findByRole("heading", { name: /welcome back/i }).should("be.visible");
  });
});

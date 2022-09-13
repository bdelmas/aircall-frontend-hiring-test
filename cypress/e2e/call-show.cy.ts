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
    cy.get(":nth-child(1) > .css-1ex1afd-MuiTableCell-root").click();

    cy.findByRole("heading", { name: /call details/i }).should("be.visible");

    // Go back to call list
    cy.get(".css-1478kkl").click();

    cy.findByRole("heading", { name: /calls list/i }).should("be.visible");

    // Logout
    cy.get('[data-testid="LogoutIcon"] > path').click();

    cy.get(".MuiTypography-h4").should("be.visible");
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
    cy.get(":nth-child(1) > .css-1ex1afd-MuiTableCell-root").click();

    cy.findByRole("heading", { name: /call details/i }).should("be.visible");

    // Archive
    // If the first element is not already archived it doesn't work
    // Also what if there are only archived calls in the whole page?
    // This test needs more work
    // Archive
    cy.get('[data-testid="UnarchiveIcon"]').click();

    cy.get(
      ':nth-child(1) > .css-1to5wv0-MuiTableCell-root > [data-testid="ArchiveIcon"]'
    ).should("be.visible");

    // Unarchive
    cy.get('[data-testid="ArchiveIcon"]').click();

    cy.get(
      ':nth-child(1) > .css-1to5wv0-MuiTableCell-root > [data-testid="UnarchiveIcon"]'
    ).should("be.visible");

    // Logout
    cy.get('[data-testid="LogoutIcon"] > path').click();

    cy.get(".MuiTypography-h4").should("be.visible");
  });
});

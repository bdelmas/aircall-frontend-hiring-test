describe("logout", () => {
  it("should be able to sign-in and logout from the call list", function () {
    cy.visit("http://localhost:3000/sign-in");

    // Login
    const username = "benjamin";
    const password = "so secret password";

    cy.findByRole("textbox", { name: /username/i }).type(username);
    cy.get("#outlined-adornment-password").type(password);

    cy.findByRole("button", { name: /sign in/i }).click();

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
    cy.get(":nth-child(1) > .css-1ex1afd-MuiTableCell-root").click();

    cy.findByRole("heading", { name: /call details/i }).should("be.visible");

    // Logout
    cy.get('[data-testid="LogoutIcon"] > path').click();

    cy.get(".MuiTypography-h4").should("be.visible");
  });
});

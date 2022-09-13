describe("sign-in", () => {
  it("should be able to sign in", function () {
    cy.visit("http://localhost:3000/sign-in");

    // Login
    const username = "benjamin";
    const password = "so secret password";

    cy.findByRole("textbox", { name: /username/i }).type(username);
    cy.get("#outlined-adornment-password").type(password);

    cy.get("#outlined-adornment-password").should("have.value", password);

    cy.get('[data-testid="VisibilityIcon"]').click();
    cy.get('[data-testid="VisibilityOffIcon"]').should("be.visible");
    cy.get('[data-testid="VisibilityOffIcon"]').click();

    cy.findByRole("button", { name: /sign in/i }).click();
  });
});

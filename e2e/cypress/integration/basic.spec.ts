describe('Frontend App', () => {
  it('should be up and running', () => {
    const frontendUrl: string = Cypress.env('FRONTEND_URL');

    cy.visit(frontendUrl);
  });

  const two: number = 2;
  const anotherTwo: number = 2;
  assert(two === anotherTwo);
});

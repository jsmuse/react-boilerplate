describe('Removing post test', () => {
  it('Removing Post', () => {
    cy.visit('/movies/');

    cy
      .get('div[name=card]')
      .first()
      .click();
    cy.get('button').click();
  });
});

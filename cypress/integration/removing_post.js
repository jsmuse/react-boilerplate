describe('Removing post test', () => {
  it('Removing Post', () => {
    cy.visit('/movies/');

    cy
      .get('div[data-location-id=card]')
      .first()
      .click();
    cy.get('button[data-locator-id=movie-remove-button]').click();
  });
});

describe('Editing post test', () => {
  it('Editing Post', () => {
    cy.visit('/movies/');

    cy
      .get('div[name=card]')
      .first()
      .click();
    cy.get('a[name=edit]').click();

    cy
      .get('input[name=title]')
      .clear()
      .type('Test title');

    cy
      .get('input[name=poster]')
      .clear()
      .type(
        'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
      );

    cy
      .get('textarea[name=description]')
      .clear()
      .type('Test description');

    cy
      .get('input[name=year]')
      .clear()
      .type('2000');

    cy
      .get('input[name=director]')
      .clear()
      .type('Test director');

    cy.get('button').click();
  });
});

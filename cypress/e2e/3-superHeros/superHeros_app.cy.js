
describe('Super Heros App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('frontpage can be openend', () => {
    cy.contains('h1', 'SUPER - HEROS');
  });

  it('Character can be openend', () => {
   cy.get('a[href*="superheros"]').first().click();
   cy.contains('Return Super-Heros').click();
  });
});



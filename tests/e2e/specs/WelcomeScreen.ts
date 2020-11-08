/// <reference types="cypress" />

describe('Welcome page', () => {
  context('Check messages', () => {
    it('Should see welcome message', () => {
      cy.visit('/');

      cy.contains('Guesszito');
      cy.contains('Guess the score of each movie and beat your opponents');
    });

    it('Redirects to start a new game page when clicking button', () => {
      cy.get('[cypress="startGame"]').click();

      cy.url().should('include', '/credentials');
    });
  });
});

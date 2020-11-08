/// <reference types="cypress" />

describe('Create Game', () => {
  context('Create user', () => {
    it('Create a new user', () => {
      cy.visit('/guessing/credentials');

      cy.get('[cypress="username"] input').type(`foo-user-${Math.random()}`);
      cy.get('[cypress="chooseMovie"]').click();

      cy.contains('play');
      cy.contains('Provide a term related to the title of the movie');
    });
  });

  context('Create a term', () => {
    it('Create a new term', () => {
      cy.get('[cypress="term"] input').type('god');
      cy.get('[cypress="createTerm"]').click();
      cy.contains('You currently don\'t have any guesses');
    });
  });

  context('Guess score', () => {
    it('Can guess all fields', () => {
      // @todo: This should use GameConfiguration.NUMBER_STEPS
      for (let i = 0; i < 5; i += 1) {
        cy.get('[cypress="guessing"] input').type('1');
        cy.get('[cypress="guessButton"]').click();

        cy.wait(500);
      }

      cy.contains('You have finished your game');
      cy.get('[cypress="seeLeaderboardButton"]').click();
      cy.url().should('include', 'results');
    });
  });
});

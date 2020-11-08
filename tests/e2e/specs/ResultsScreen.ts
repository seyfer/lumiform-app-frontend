describe('Results Screen', () => {
  it('Should see table', () => {
    cy.visit('/results');
    cy.contains('Score');

    cy.wait(500);

    // We are assuming the pagination result is 10
    // We could make this better with environment variables
    cy.get('tbody').children().should('have.length', 10);
  });

  it('Last page button should be disabled', () => {
    cy.get('[cypress="lastPageButton"]button').should('be.disabled');
  });

  it('Should be able to click next page (assuming there are enough results)', () => {
    cy.get('[cypress="nextPageButton"]button').should('not.be.disabled');
  });

  it('Should be able to click next button', () => {
    cy.wait(1000);
    cy.get('[cypress="nextPageButton"]button').click();
  });

  it('Order descending by score when clicking first time', () => {
    cy.wait(500);
    cy.get('thead th:nth-child(4)').click();
    cy.wait(500);
    cy.get('td[data-label="Score"]')
      .each(($item, index, list) => {
        if (index === 0) return;

        cy.wrap(parseInt($item.text(), 10))
          .should('be.gte', parseInt((list[index - 1]).innerText, 10));
      });
  });

  it('Order ascending by score when clicking first time', () => {
    cy.wait(500);
    cy.get('thead th:nth-child(4)').click();
    cy.wait(500);
    cy.get('td[data-label="Score"]')
      .each(($item, index, list) => {
        if (index === 0) return;

        cy.wrap(parseInt($item.text(), 10))
          .should('be.lte', parseInt((list[index - 1]).innerText, 10));
      });
  });
});

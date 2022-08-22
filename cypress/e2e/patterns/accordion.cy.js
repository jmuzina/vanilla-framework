describe('accordion', () => {
  beforeEach(() => {
    cy.visit('/docs/examples/patterns/accordion/default');
  });
  it('opens and closes a single list item on click', () => {
    cy.findByRole('list').should('be.visible');
    cy.findByRole('region', {name: /Networking/}).should('not.exist');
    cy.findByRole('button', {name: /Networking/}).click();
    cy.findByRole('region', {name: /Networking/}).should('exist');
    cy.findAllByRole('region').should('have.length', 1);
    cy.findByRole('button', {name: /Networking/}).click();
    cy.findByRole('region', {name: /Networking/}).should('not.exist');
    cy.findAllByRole('region').should('have.length', 0);
  });
});

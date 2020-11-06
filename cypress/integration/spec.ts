describe(`app`, () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads examples 1', () => {
    cy.contains('Here are some links to help you get started');
  });

  it('loads examples 2', () => {
    cy.contains('Here are some links to help you get started');
  });

  it('loads examples 3', () => {
    cy.contains('Here are some links to help you get started');
  });

  it('loads examples 4', () => {
    cy.contains('Here are some links to help you get started');
  });

  it('loads examples 5', () => {
    cy.contains('Here are some links to help you get started');
  });

});

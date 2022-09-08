describe('To automate the Webiste', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/');
  });

  it('Check Home page all links', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click();
    cy.get('.cat-name').should('have.text', 'Women ');
    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click();
    cy.get('.cat-name').should('have.text', 'Dresses ');
    cy.get('.sf-menu > :nth-child(3) > a').click();
    cy.get('.cat-name').should('have.text', 'T-shirts ');
    cy.get('[title="View my shopping cart"]').click();
    cy.get('#cart_title').should('have.text', 'Shopping-cart summary\n\t');
    cy.get('.page-heading').should('have.text', '\n    Customer service - Contact us');
  });

  it('Automate Home Page', () => {
    cy.get('#search_block_top').click();
    cy.get('.sf-menu').click();
    cy.get('.logo').should('have.attr', 'src', 'http://automationpractice.com/img/logo.jpg');
  })
  it('Search a Product by Name & Result found', () => {
    cy.get('#search_query_top').type('shirt');
    cy.get('#searchbox > .btn').click();
    cy.get('.heading-counter').should('have.text', '\n            1 result has been found.        ');
  })
  it('Search a Product by Name & Result not found', () => {
    cy.get('#search_query_top').type('xyzzz');
    cy.get('#searchbox > .btn').click();
    cy.get('.heading-counter').should('have.text', '\n            0 results have been found.        ');
  })
})
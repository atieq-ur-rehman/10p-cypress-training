export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let email = '';
export function randomEmail(domain = '@yopmail.net') {

  let numbers = '0123456789';
  let names = ['james', 'wang', 'admiral', 'mary', 'charles', 'jim', 'david', 'parker', 'Rhanny', 'roman', 'kiwi', 'nehal'];
  email += names[randomNumber(0, names.length - 1)];

  // format = james4958@gmail.com
  for (let i = 0; i < 4; i++) email += numbers[randomNumber(0, numbers.length - 1)];

  console.log(email);
  return email + domain;
}
email = randomEmail();

describe('To automate the Webiste', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/');
  });

  it('Check Register Account with inValid Email', function() {

    cy.get('.login').click();
    cy.get('.page-heading').should('have.text', 'Authentication');
    cy.get('#SubmitCreate > span').click();
    cy.get('#create_account_error').should('have.text', 'Invalid email address.')

  });

  it('Check Register Account with new Email', function() {

    cy.get('.login').click();
    cy.get('.page-heading').should('have.text', 'Authentication');
    //cy.get('#email_create').clear('10p-cypress@yopmail.com');
    cy.get('#email_create').type(email);
    cy.get('#SubmitCreate > span').click();
    //cy.get('#create_account_error').should('have.text', 'An account using this email address has already been registered. Please enter a valid password or request a new one. ')
    cy.get('.page-heading').should('have.text', 'Create an account');
    cy.get('#id_gender1').check();
    cy.get('#customer_firstname').clear('C');
    cy.get('#customer_firstname').type('Cypress');
    cy.get('#customer_lastname').clear();
    cy.get('#customer_lastname').type('Training');
    cy.get('#passwd').clear('(');
    cy.get('#passwd').type('(cypress)');
    cy.get('#days').select('8');
    cy.get('#months').select('1');
    cy.get('#years').select('1993');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('#company').clear('1');
    cy.get('#company').type('10Pearls');
    cy.get('#address1').clear('G');
    cy.get('#address1').type('Ghalib Road Street 1');
    cy.get('#address2').click();
    cy.get('#address2').type('B Block');
    cy.get('#city').type('Lahore');
    cy.get('#id_state').select('1');
    cy.get('#postcode').clear('54');
    cy.get('#postcode').type('54000');
    cy.get('#other').click();
    cy.get('#other').type('Additional Information Filled');
    cy.get('#phone').type('03211234567');
    cy.get('#phone_mobile').click();
    cy.get('#phone_mobile').clear('0');
    cy.get('#phone_mobile').type('03211234567');
    cy.get('#submitAccount > span').click();
    cy.get('.page-heading').should('have.text', 'My account');
    cy.get('.logout').click();
    cy.get('.page-heading').should('have.text', 'Authentication');

  });

  it('Check Register Account with existing Email', function() {
    cy.get('.login').click();
    cy.get('.page-heading').should('have.text', 'Authentication');
    //cy.get('#email_create').clear('10p-cypress@yopmail.com');
    cy.get('#email_create').type('10p-cypress@yopmail.com');
    cy.get('#SubmitCreate > span').click();
    cy.get('#create_account_error').should('have.text', 'An account using this email address has already been registered. Please enter a valid password or request a new one. ')

  });

  it('Check Login with Valid Creds', function() {
    cy.get('.login').click();
    cy.get('.page-heading').should('have.text', 'Authentication');
    //cy.get('#email_create').clear('10p-cypress@yopmail.com');
    cy.get('#email').type(email);
    cy.get('#passwd').type('(cypress)');
    cy.get('#SubmitLogin > span').click();

  });

  it('Check Login with empty email', function() {
    cy.get('.login').click();
    cy.get('.page-heading').should('have.text', 'Authentication');
    cy.get('#email').type('');
    cy.get('#SubmitLogin > span').click();
    cy.get('div.alert.alert-danger').should('have.text', 'An email address required.')
  });

  it('Check Login with empty password', function() {
    cy.get('.login').click();
    cy.get('.page-heading').should('have.text', 'Authentication');
    cy.get('#passwd').type('');
    cy.get('#SubmitLogin > span').click();
    cy.get('div.alert.alert-danger').should('have.text', 'Password is required.')
  });

})
describe('Sensitive data bad practice', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/login')
  })

  it('fills the form without leaking sensitive data', () => {
    cy.get('#email').type(Cypress.env('USER_EMAIL'))
    cy.get('#password').type(Cypress.env('USER_PASSWORD'), { log: false })
  })
})
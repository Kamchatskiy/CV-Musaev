describe('main page', () => {
  it('titles contain the correct text', () => {
    cy.visit('http://localhost:3000/')
    cy.get("Title").contains("Testing Next.js Applications with Cypress")
  })
})
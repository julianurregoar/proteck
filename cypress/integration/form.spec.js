describe('fill the form', () => {
  
  beforeEach(() => {
    cy.visit("/");
  })
  it("fill first part in the form", () => {
    cy.fixture("form").then((index) => {
      cy.get(index.contactButton).click()
      cy.get(index.firstNameInput).type("Julian")
      cy.get(index.lastNameInput).type("Urrego")
      cy.get(index.selectGenderOption).select("male")
      cy.get(index.nextButton).click()
    })
  })
})
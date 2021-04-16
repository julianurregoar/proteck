import IndexPage from 'cypress/support/pages/index.js'
import ArticulePage from 'cypress/support/pages/articules.js'

describe('Search test cases', () => {

  before(()=> {
    cy.log("Executing before tests")
  })

  after(() => {
    cy.log("Executing after test")
  })

  beforeEach(() => {
    cy.visit("http://automationpractice.com/");
  })

  afterEach(() => {
    cy.log("set orginal states.")
  })

  it("Search dresses", ()=> {
    IndexPage.search("dress")
    ArticulePage.verifyArticule("dress")
    cy.logSpecFormat("Hello")
  })

  it("Search hats", ()=> {
    IndexPage.search("hat")
    cy.get('.lighter').contains("hat")
  })
})
describe('Go to different sections', ()=>{
  beforeEach(() => {
    cy.visit("http://automationpractice.com/");
  })

  it("Search Large Tops", ()=> {
    cy.get('[class="sf-with-ul"]').first().click()
  })

  it("Go to Dresses section", () => {
    cy.get('[class="sf-with-ul"]').eq(3).click()
    
  })
  
})
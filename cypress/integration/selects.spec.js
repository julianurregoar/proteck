describe('Search test cases', ()=>{
  beforeEach(() => {
    cy.visit("http://automationpractice.com/");
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
  })

  it("Search Large Tops", ()=> {
    cy.get('#layered_category_4').check()
    cy.get('#layered_id_attribute_group_3').check()
  })

  it("Order By Highest Price", () => {
    cy.get('#selectProductSort').select("Price: Highest first")
  })
  
})
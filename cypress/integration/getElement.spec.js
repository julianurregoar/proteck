describe("differnts ways to get an element", ()=> {
  it("search in the search engine", ()=> {
    cy.visit("http://automationpractice.com/");
    cy.get(".search_query.form-control.ac_input").type("By Class") //search per class
    cy.get('#search_query_top').type(" By Id") // search by id
    cy.get('[name="search_query"]').type(' By name') // search by name
    cy.get('[placeholder="Search"]').clear().type("Chain actions") // clear by placeholder
  })
})
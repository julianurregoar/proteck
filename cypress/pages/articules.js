class ArticulesPage {
  constructor() {
    this.banner = '.lighter';
  }

  verifyArticule = (articule) => {
    cy.get(this.banner).contains(articule)
  }
}

export default new ArticulesPage();
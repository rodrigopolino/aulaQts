describe(' teste no site do Palmeiras ', () => {
  it('Entrar no site do Palmeiras', () => {
    cy.visit('https://www.google.com.br/')
  })
    it('E digita no campo de busca', () =>{
      cy.get('input[name=q]').type('Palmeiras')
    }) 
    it('E realiza a busca', () =>{
      cy.get('form').submit({})
    }) 
    it('Então verifica a opção da busca', () =>{
      cy.get('h3').should('include.text', 'Palmeiras')
    }) 
  })
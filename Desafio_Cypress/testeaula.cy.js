describe('Sistema de busca do Google', () => {
  it('Acessa a pagina do Google', () => {
    cy.visit('https://www.google.com')
  })
  it('E digita no campo de busca', () =>{
    cy.get('input[name=q]').type('Etec Prof Camargo Aranha')
  }) 
  it('E realiza a busca', () =>{
    cy.get('form').submit({})
  }) 
  it('Então verifica a opção da busca', () =>{
    cy.get('h3').should('include.text', 'Camargo Aranha')
  }) 
})

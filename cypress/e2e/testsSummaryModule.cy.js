describe('Test modulo informes', () => {
  beforeEach(function () {})

  it('Dirigirse al inicio', ()=>{
    cy.clearCookies()
    cy.visit('/')
    const inputUser = cy.get('#id_username')
    const inputPass = cy.get('#id_password')
    inputUser.clear(); inputUser.type('admin');
    inputPass.clear(); inputPass.type('admin');
    cy.get('button[type="submit"]').click()
  })


  it('Filtrar por todos los tipos de servicio', ()=>{
    cy.get('#id_service_type').select('**Todos los servicios**')
  })

})

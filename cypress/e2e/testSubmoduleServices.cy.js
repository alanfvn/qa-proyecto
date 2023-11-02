describe('Test submodulo de servicios', () => {

  beforeEach(function () {})

  it('Dirigirse al inicio', ()=>{
    cy.clearCookies()
    cy.visit('/')
    const inputUser = cy.get('#id_username')
    const inputPass = cy.get('#id_password')
    inputUser.clear().type('admin')
    inputPass.clear().type('admin')
    cy.get('button[type="submit"]').click()
  })

  it('Agregar servicio', ()=>{
    cy.visit('/recursos/servicios/crear/')
    cy.get('#id_nombre').type('SERVICIO DE PRUEBA')
    cy.get('#id_descripcion').type('AGREGANDO DESCRIPCION DE PRUEBA')
    cy.get('form').submit()
    cy.url().should('contain','/recursos/servicios/')
  })

  it('Editar servicio', ()=>{
    cy.visit('/recursos/servicios/')
    //buscar botón de edición para, ítem que no sea Admin
    const btnEdit = cy.get('tbody tr')
    .not(':has(th[scope="row"]:contains("1"))').first()
    .find('.btn-info')
    btnEdit.click()
    // editar valores
    cy.get('#id_nombre').clear().type('SERVICIO DE PRUEBA (EDITADO)')
    cy.get('#id_descripcion').clear().type('EDITANDO DESCRIPCION DE PRUEBA')
    //enviar cambios
    cy.get('form').submit()
    cy.url().should('contain','/recursos/servicios/')
  })

  it('Eliminar servicio', ()=>{
    //buscar botón de eliminar para, ítem que no sea Admin
    const btnDelete = cy.get('tbody tr')
    .not(':has(th[scope="row"]:contains("1"))').first()
    .find('.btnDelete')
    btnDelete.click()
    //debe estar en la misma pagina.
    cy.url().should('contain','/recursos/servicios/')
  })
})

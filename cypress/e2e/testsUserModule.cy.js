describe('Test modulo personal', () => {

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

  it('Agregar usuario repetido', ()=>{
    cy.visit('/personal/crear/')
    cy.get('#id_username').type('admin')
    cy.get('#id_password').type('clave')
    cy.get('form').submit();
    cy.get('.errorlist').should('exist');
  })

  it('Agregar usuario', ()=>{
    cy.visit('/personal/crear/')
    cy.get('#id_username').type('UsuarioPrueba')
    cy.get('#id_first_name').type('Campo para nombres')
    cy.get('#id_last_name').type('Campo para los apellidos')
    cy.get('#id_password').type('clavedeprueba')
    cy.get('form').submit();
    // esperar que se este en la pagina de usuarios 
    cy.url().should('contain','/personal/')
  })

  it('Editar usuario', ()=>{
    cy.visit('/personal/')
    // buscar usuario que no sea el Admin.
    const btnEdit = cy.get('tbody tr')
    .not(':has(th[scope="row"]:contains("1"))')
    .find('.btn-warning').first()
    btnEdit.click()

    cy.get('#id_username').clear().type('UsuarioEditado')
    cy.get('#id_first_name').clear().type('Nombres Editados')
    cy.get('#id_last_name').clear().type('Apellidos Editados')
    cy.get('#id_password').type('claveeditada')
    cy.get('form').submit();
    // esperar que se este en la pagina de usuarios 
    cy.url().should('contain','/personal/')
  })

  it('Eliminar usuario', ()=>{
    cy.visit('/personal/')
    // buscar usuario que no sea el Admin.
    const btnEdit = cy.get('tbody tr')
    .not(':has(th[scope="row"]:contains("1"))')
    .find('.delete-user').first()
    btnEdit.click()
    // esperar que se este en la pagina de usuarios 
    cy.url().should('contain','/personal/')
  })

})

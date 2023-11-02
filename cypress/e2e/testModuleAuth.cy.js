describe('Tests de autenticación', () => {

  beforeEach(function (){})

  it('Verificar campos vacios', ()=>{
    cy.clearCookies()
    cy.visit('/')
    cy.get('button[type="submit"]').click()
    cy.url().should('contain','/auth/login/')
  })

  it('Verificar inició de sesión con mayúsculas', ()=>{
    cy.get('#id_username').type('ADMIN')
    cy.get('#id_password').type('admin')
    cy.get('button[type="submit"]').click()
    cy.get('div.alert').should('exist');
  })

  it('Verificar inició de sesión', () => {
    const inputUser = cy.get('#id_username')
    inputUser.clear().type('admin')
    cy.get('#id_password').type('admin')
    cy.get('button[type="submit"]').click()
  })

  it('Verificar cerrar sesión', ()=>{
    cy.get('a[href="/auth/logout/"]').click();
  })
})

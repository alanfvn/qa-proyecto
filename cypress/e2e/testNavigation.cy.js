describe('Tests de navegación', () => {
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

  it('Dirigirse al modulo de reportes', ()=>{
    cy.get('a[href="/reportes/"]').click()
    cy.contains('h1', 'Reportes').should('exist');
  })

  it('Dirigirse al modulo de informes', ()=>{
    cy.get('a[href="/informes/"]').click()
    cy.contains('h1', 'Informes').should('exist');
  })

  it('Dirigirse al modulo de personal', ()=>{
    cy.get('a[href="/personal/"]').click()
    cy.contains('h1', 'Usuarios').should('exist');
  })

  it('Dirigirse al submodulo de servicios', ()=>{
    cy.get('.nav-link.dropdown-toggle').click();
    cy.get('a[href="/recursos/servicios/"]').click()
    cy.contains('h1', 'Servicios').should('exist');
  })

  it('Dirigirse al submodulo de vehiculos', ()=>{
    cy.get('.nav-link.dropdown-toggle').click();
    cy.get('a[href="/recursos/vehiculos/"]').click()
    cy.contains('h1', 'Unidades').should('exist');
  })

  it('Dirigirse al submodulo de vehiculos', ()=>{
    cy.get('.nav-link.dropdown-toggle').click();
    cy.get('a[href="/recursos/hospitales/"]').click()
    cy.contains('h1', 'Hospitales').should('exist');
  })

})

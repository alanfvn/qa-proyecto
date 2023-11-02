import { getFormattedDate } from "../../src/utils"

const startDate = new Date();
startDate.setHours(0, 0, 0, 0);

const endDate = new Date();
endDate.setMonth(endDate.getMonth() + 1);
endDate.setHours(23, 59, 59, 999);


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

  it('Filtrar por todos los tipos de servicio', () => {
    cy.visit('/informes/')
    cy.get('#id_service_type').select('**Todos los servicios**')
    cy.get('#id_start_date').type(getFormattedDate(startDate))
    cy.get('#id_end_date').type(getFormattedDate(endDate))
    cy.get('#form-summary').submit(); 
  })

  it('Filtrar por servicio especifico', () => {
    cy.visit('/informes/')
    cy.get('#id_service_type').select('Caida casual')
    cy.get('#id_start_date').type(getFormattedDate(startDate))
    cy.get('#id_end_date').type(getFormattedDate(endDate))
    cy.get('#form-summary').submit(); 
  })

  it('Filtrar por rango de fecha erroneo', () => {
    cy.visit('/informes/')
    cy.get('#id_service_type').select('**Todos los servicios**')
    cy.get('#id_start_date').type(getFormattedDate(endDate))
    cy.get('#id_end_date').type(getFormattedDate(startDate))
    cy.get('#form-summary').submit(); 
    // esperar que se muestre la alerta, de rango erróneo.
    cy.get('div.alert').should('exist');
  })

  it('Busqueda por tabla', ()=>{
    cy.get('input[type="search"]').type('DATOS RANDOM')
    cy.get('.dataTables_empty').should('exist');
    cy.get('input[type="search"]').clear()
  })

})

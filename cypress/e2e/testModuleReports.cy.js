import {getRandomInt, getFormattedDateTime, getFormattedDate} from '../../src/utils.js'

describe('Test modulo reportes', () => {
  beforeEach(function () {})

  it('Dirigirse al inicio', ()=>{
    cy.clearCookies()
    cy.visit('/')
    const inputUser = cy.get('#id_username')
    const inputPass = cy.get('#id_password')
    inputUser.clear().type('admin');
    inputPass.clear().type('admin');
    cy.get('button[type="submit"]').click()
  })

  it('Verificar campos vacios', ()=>{
    cy.visit('/reportes/crear/')
    cy.get('form').submit();
    cy.get('div.alert').should('exist');
  })

  it('Crear reporte', ()=>{
    cy.visit('/reportes/crear/')

    const data = {
      'id_control': getRandomInt(100, 10_000),
      'id_fecha_reporte': getFormattedDate(),
      'id_salida': '36 CIA',
      'id_hora_salida': getFormattedDateTime(),
      'id_entrada': '36 CIA',
      'id_hora_entrada': getFormattedDateTime(),
      'id_observaciones': 'rellenando observaciones',
      'id_direccion': '1a calle 8-20',
      'id_solicitantes': 'Alan González',
      'id_escoltas': 'José Raúl',
      'id_pacientes': 'Manuel Miguel Miguel: 25',
      "id_domicilios": 'Porton negro'
    }

    const selectData = {
      'id_pilotos': 'admin',
      'id_unidades': 'Ambulancia',
      'id_personal_destacado': 'admin',
      'id_radiotelefonista': 'admin',
      'id_formalizador': 'admin',
      'id_jefe_servicio': 'admin',
      'id_tipo_solicitud': 'Personal',
      'id_tipo_servicio': 'Caida casual',
      'id_hospital': 'General',
    }

    Object.entries(data).forEach(([key, value]) => {
      cy.get(`#${key}`).type(value);
    });

    Object.entries(selectData).forEach(([key, value]) => {
      cy.get(`#${key}`).select(value, {force: true});
    });
    cy.get('form').submit(); 
    cy.url().should('contain','/reportes/')
  })


  it('Editar reporte', ()=>{
    cy.visit('/reportes/')
    cy.get('a.btn-warning[href*="/reportes/"]').first().click();

    const data = {
      'id_control': getRandomInt(100, 10_000),
      'id_salida': '36 CIA EDITADO',
      'id_entrada': '36 CIA EDITADO',
      'id_observaciones': 'rellenando observaciones (edición)',
      // ultimo apartado,
      'id_direccion': '1a calle 8-20 (EDITADO)',
      'id_solicitantes': 'Alan González EDITADO',
      'id_escoltas': 'José Raúl EDITADO',
      'id_pacientes': 'Manuel Miguel Miguel EDITADO: 25',
      "id_domicilios": 'Porton negro (EDITADO)'
    }

    Object.entries(data).forEach(([key, value]) => { 
      const btn = cy.get(`#${key}`)
      btn.clear().type(value)
    });

    cy.get('form').submit(); 
    cy.url().should('contain','/reportes/')
  })

  it('Generar PDF', ()=>{
    cy.visit('/reportes/')
    const printBtn = cy.get('a.btn-info').first()
    const baseUrl = Cypress.config('baseUrl')

    printBtn.invoke('attr', 'href').then((href) => {
      //remove the first '/', as base url already has it.
      href = href.substring(1)
      cy.downloadFile(`${baseUrl}${href}`,'downloads','reporte.pdf')
    });
  })

  it('Filtrado de un reporte', ()=>{
    cy.visit('/reportes/')
    cy.get('input[type="search"]').type('DATOS RANDOM')
    cy.get('.dataTables_empty').should('exist');
    cy.get('input[type="search"]').clear()
  })

  it('Eliminar un reporte', ()=>{
    cy.get('button.btn.btn-danger.delete-report').first().click();
  })
})

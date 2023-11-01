# Set de pruebas

## Tests de autenticación
- Verificar inicio de sesión con *credenciales VACÍAS*
    - No colocar nada en el campo de usuario.
    - No colocar nada en el campo de password.
    - Hacer click al botón de inicio de sesión.

- Verificar inicio de sesión (usuario con mayúsculas)
    - Colocar usuario con mayúsculas.
    - Colocar password.
    - Hacer click al botón de inicio de sesión.

- Verificar inicio de sesión con *credenciales CORRECTAS*
    - Colocar usuario
    - Colocar password
    - Hacer click al botón de inicio de sesión.

- Verificación de cerrar sesión
    - Hacer click en "cerra sesión"

## Tests de navegación
- Verificación de navegación
    - Ingreso al módulo de reporte
    - Ingreso al módulo de informes
    - Ingreso al módulo de personal
    - Ingreso al modulo de recurso
        - Acceso a sub modulo de personal
        - Acceso a sub modulo de vehículos
        - Acceso a Sub modulo de hospitales

## Tests al modulo de reportes

### Formulario (crear)
- Campos vacíos
- Crear reporte

### Formulario (editar)
- Campos vacíos
- Editar reporte

### Funcionalidad
- Agregar un reporte
- Generar pdf de un reporte
- Filtrado de reporte
- Eliminar un reporte

## Tests al modulo de informes
- Imprimir informe vació
- Filtrar por todos los tipos de servicios
- Filtrar por servició especifico
- Filtrar por fecha
    - Mes actual 
    - Rango de fecha erróneo
- Búsqueda por tabla
- Imprimir informe filtrado

## Tets al modulo de personal
- Verificar campos vacíos
- Agregar usuario
- Editar usuario
- Eliminar usuario


## Tests al modulo de recursos

### Tests de Sub modulo de *Servicios*
- Crear servicio
    - Verificar campos
- Editar servicio
    - Verificar campos
- Eliminar servicio 

### Tests al Sub modulo de *Vehículos*
- Crear vehículos
    - Verificar campos
- Editar vehículos
    - Verificar campos
- Eliminar vehículos 

### Tests al Sub modulo de *Hospitales*
- Crear hospitales
    - Verificar campos
- Editar hospitales
    - Verificar campos
- Eliminar hospitales 

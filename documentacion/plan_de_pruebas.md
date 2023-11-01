
# Historial de versiones
| Fecha | Versión | Autor | Organización | Descripción |
|-----------|-----------|-----------|-----------|-----------|
| 01-10-23  | 1.0  | Manauel Miguel Miguel  | GRUPO BOTZIC  | Documento Plan de Pruebas  |

# Informacion del proyecto
| Campo                       | Descripción                                        |
|----------------------------- |--------------------------------------------------- |
| Empresa / Organización      | GRUPO MIGUEDOCU UMG        |
| Proyecto                    | SISTEMA BOMBEROS VOLUNTARIOS COBAN                        |
| Fecha de preparación        | 01-10-23          |
| Cliente                     | BOMBEROS VOLUNTARIOS COBAN                         |
| Patrocinador principal      | ALAN DAVID, MANUEL MIGUEL, JOSE RAUL          |
| Gerente / Líder de Proyecto | MANUEL MIGUEL       |
| Gerente / Líder de Pruebas de Software | ALAN DAVID GONZALES |

# Alcance de las pruebas
El alcance de las pruebas para el sistema de registro y generación de informes diseñado para los Bomberos voluntarios de Cobán, Alta Verapaz, abarcará la verificación de todas las funcionalidades críticas del sistema, incluyendo la captura precisa de datos de emergencias, la gestión eficiente de cada módulo que coforma, el registro y la  generación de informes detallados. Se llevarán a cabo pruebas de usabilidad para garantizar una interfaz intuitiva y fácil de usar. Se evaluará la seguridad del sistema para proteger la confidencialidad y la integridad de los datos sensibles. Las pruebas se centrarán en garantizar que el sistema sea confiable y eficiente.

- [pendiente] Aqui va la parte que le correspode documentar a Raul
## Funcionalidades a probar

### Tests de autenticación
- Verificar inicio de sesión con credenciales VACÍAS
    - No colocar nada en el campo de usuario.
    - No colocar nada en el campo de password.
    - Hacer click al botón de inicio de sesión.

- Verificar inicio de sesión (usuario con mayúsculas)
    - Colocar usuario con mayúsculas.
    - Colocar password.
    - Hacer click al botón de inicio de sesión.

- Verificar inicio de sesión con credenciales CORRECTAS
    - Colocar usuario
    - Colocar password
    - Hacer click al botón de inicio de sesión.

- Verificación de cerrar sesión
    - Hacer click en "cerra sesión"

### Tests de navegación
- Verificación de navegación
    - Ingreso al módulo de reporte
    - Ingreso al módulo de informes
    - Ingreso al módulo de personal
    - Ingreso al modulo de recurso
        - Acceso a sub modulo de personal
        - Acceso a sub modulo de vehículos
        - Acceso a Sub modulo de hospitales

### Tests al modulo de reportes
#### Funcionalidad
- Crear reporte
    - Verificar campos vacíos
    - Guardar cambios
- Editar reporte
    - Verificar campos vacíos
    - Guardar cambios
- Generar PDF de un reporte
- Filtrado de reporte
- Eliminar un reporte

### Tests al modulo de informes
- Imprimir informe vació
- Filtrar por todos los tipos de servicios
- Filtrar por servició especifico
- Filtrar por fecha
    - Mes actual
    - Rango de fecha erróneo
- Búsqueda por tabla
- Imprimir informe filtrado

### Tests al modulo de personal
- Agregar usuario
    - Verificar campos vacíos
    - Guardar cambios
- Editar usuario
    - Verificar campos vacíos
    - Guardar cambios
- Eliminar usuario

### Tests al modulo de recursos
#### Tests de Sub modulo de Servicios
- Crear servicio
    - Verificar campos
    - Guardar cambios
- Editar servicio
    - Verificar campos
    - Guardar cambios
- Eliminar servicio
#### Tests al Sub modulo de Vehículos
- Crear vehículos
    - Verificar campos
    - Guardar cambios
- Editar vehículos
    - Verificar campos
    - Guardar cambios
- Eliminar vehículos
#### Tests al Sub modulo de Hospitales
- Crear hospitales
    - Verificar campos
    - Guardar cambios
- Editar hospitales
    - Verificar campos
    - Guardar cambios
- Eliminar hospitales


## Funcionalidades a no probar

# Criterios de aceptacion
# Criterios de rechazo


# Entregables
Establece que se entregará como parte de la ejecución del plan, por ejemplo: Documento de Plan de Pruebas, Casos de Pruebas, Especificación de Diseño de Casos, Logs de errores, Reportes de incidencias, evidencias de pruebas, reportes emitidos por herramientas de pruebas y cualquier otro que se establezca.


# Recursos
## Requerimientos de Entornos – Hardware 
### Servidores de Aplicación
Procesador: Mínimo de 4 núcleos, preferiblemente 8 núcleos o más.
Memoria RAM: Mínimo 8 GB, se recomiendan 16 GB o más.
Almacenamiento: Mínimo 100 GB de espacio en disco duro.
Sistema Operativo: Linux o Windows Server, dependiendo de las preferencias del sistema y software.
### Bases de Datos
Procesador: Dependerá de la carga de trabajo, pero se recomiendan múltiples núcleos.
Memoria RAM: Mínimo 8 GB, se recomiendan 16 GB o más.
Almacenamiento: Capacidad suficiente para la base de datos y las copias de seguridad.
### Equipos de PC para Testers
Procesador: Dual-core o superior.
Memoria RAM: Mínimo 4 GB, se recomiendan 8 GB o más.
Almacenamiento: Al menos 250 GB de espacio en disco duro.
Sistema Operativo: Windows 10 o una distribución de Linux compatible con las herramientas de pruebas.
### Conectividad a la Red
Conexión a Internet: Banda ancha con una velocidad razonable para la descarga de actualizaciones y acceso a recursos en línea.
Red Local: Red Ethernet cableada con capacidad de al menos 1 Gbps para pruebas internas.
### Accesos
Cuentas de usuario con permisos adecuados para realizar pruebas.
Requisitos de hardware y sistema operativo específicos según las plataformas móviles (por ejemplo, Android o iOS).
### Equipamiento de prueba adicional:
Las características mínimas variarán según el equipo o software específico utilizado para las pruebas de integración, carga o rendimiento. Verifica las especificaciones del equipo o software en cuestión.


## Requerimientos de Entornos – Software 
### Sistema de registro y generación de informes
El software de registro y generación de informes que se va a probar.
### Sistema de gestión de bases de datos
El sistema de gestión de bases de datos (DBMS) compatible con el software de la aplicación.
Configuración adecuada de la base de datos, incluyendo la creación de esquemas y tablas requeridos.
### Sistemas Operativos
Sistemas operativos compatibles con el software de registro y generación de informes, tanto en servidores como en equipos de prueba.
Las versiones específicas del sistema operativo que el software admite.
### Navegadores Web (si es aplicable)
Navegadores web compatibles para la interfaz de usuario del sistema.
Asegurarse de que los navegadores estén actualizados a las últimas versiones.
### Herramientas de Desarrollo (si es necesario):
Herramientas de desarrollo como IDE (Entorno de Desarrollo Integrado), compiladores, depuradores, etc., si se realizan modificaciones o personalizaciones en el software.
### Software de pruebas y automatización
Herramientas de pruebas, como suites de pruebas, frameworks de automatización, software de gestión de pruebas, entre otros, utilizados para llevar a cabo las pruebas.
### Herramientas de Documentación:
Software de procesamiento de texto o herramientas de documentación para registrar resultados de pruebas, incidentes y documentación de pruebas.







## Herramientas de Pruebas Requeridas 
Especifica las herramientas de software, metodologías o técnicas especiales empleadas en las pruebas, por ejemplo Herramientas de Automatización de Pruebas, Software de Gestión de Pruebas, entre otros. 
## Personal
Lista del personal necesario para completar las actividades de pruebas, especificando sus roles, por ejemplo: Un (1) Líder de Pruebas, Cinco (5) Analista de Pruebas (Testers), Dos (2) especialistas en automatización de pruebas, entre otros. 
## Entrenamiento
Necesidades de entrenamiento en el Sistema o Aplicación, así como en las herramientas de prueba a utilizar.

# Planificación y Organización
## Procedimientos para las Pruebas
Especifica los procedimientos o metodología de pruebas a emplear durante la ejecución del plan de pruebas de software.
## Matriz de Responsabilidades
Lista cada una de las personas integrantes del equipo de QA y sus responsabilidades. Se puede hacer uso de una Matriz RACI (Responsable, Aprobador, Consultado, Informado). 

# Premisas
Las premisas relacionadas con las tareas de pruebas de software, incluyendo limitaciones de tiempo, disponibilidad de recursos que se asumen, uso de una metodología de pruebas, uso de una herramienta, entre otros.

# Dependencias y Riesgos
Aquí se listan los riesgos asociados con el proceso de pruebas de software, por ejemplo, algunas fuentes de riesgos suelen ser:
•	Dependencias con Desarrollos.
•	Dependencias con otros proyectos.
•	Disponibilidad de recursos.
•	Restricciones de tiempo.
•	Premisas que resulten no ser ciertas. 
Los riesgos se pueden clasificar en función de su probabilidad e impacto, cada uno debe contemplar un plan de mitigación para evitar que ocurra o plan de contingencia cuando el riesgo no puede mitigarse y tiene que aceptarse.
# Referencias 
Lista de todos los documentos que pueden citarse como apoyo o para ampliar el contenido del plan de pruebas. Algunos ejemplos de lo que se puede hacer referencia aquí son: 
•	Plan de Proyecto.
•	Especificaciones de Requerimientos. 
•	Diseño General.
•	Diseño Detallado. 
•	Procedimientos y estándares de Desarrollo. 
•	Procedimientos y estándares de Pruebas. 
•	Metodologías, Procedimientos y estándares corporativos.
# Glosario
Definiciones de términos usados en la documentación, y general sobre el área de pruebas.
















 














 


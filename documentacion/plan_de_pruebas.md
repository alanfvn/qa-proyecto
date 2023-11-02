## UNIVERSIDAD MARIANO GÁLVEZ DE GUATEMALA FACULTAD DE INGENIERÍA EN SISTEMAS DE INFORMACIÓN

**“PROYECTO FINAL (ZYPRESS)”**

- ALAN DAVID GONZÁLEZ LÓPEZ (4090-19-4713)
- MANUEL MIGUEL MIGUEL (4090-19-9063)
- JOSÉ RAÚL BOTZOC MÉRIDA (4090-19-7994)

GUATEMALA, 03 de noviembre de 2023

# Historial de versiones
| Fecha | Versión | Autor | Organización | Descripción |
|-----------|-----------|-----------|-----------|-----------|
| 01-10-23  | 1.0  | Manauel Miguel Miguel  | GRUPO BOTZIC  | Documento Plan de Pruebas  |

# Información del proyecto
| Campo                       | Descripción                                        |
|----------------------------- |--------------------------------------------------- |
| Empresa / Organización      | GRUPO BOTZIC UMG        |
| Proyecto                    | SISTEMA BOMBEROS VOLUNTARIOS COBAN                        |
| Fecha de preparación        | 01-10-23          |
| Cliente                     | BOMBEROS VOLUNTARIOS COBAN                         |
| Patrocinador principal      | ALAN DAVID, MANUEL MIGUEL, JOSE RAUL          |
| Gerente / Líder de Proyecto | MANUEL MIGUEL       |
| Gerente / Líder de Pruebas de Software | ALAN DAVID GONZALES |

# Alcance de las pruebas
El alcance de las pruebas para el sistema de registro y generación de informes diseñado para los Bomberos voluntarios de Cobán, Alta Verapaz, abarcará la verificación de todas las funcionalidades críticas del sistema, incluyendo la captura precisa de datos de emergencias, la gestión eficiente de cada módulo que coforma, el registro y la  generación de informes detallados. Se llevarán a cabo pruebas de usabilidad para garantizar una interfaz intuitiva y fácil de usar. Se evaluará la seguridad del sistema para proteger la confidencialidad y la integridad de los datos sensibles. Las pruebas se centrarán en garantizar que el sistema sea confiable y eficiente.

# Objetivos de prueba
1) Verificar la funcionalidad de inicio de sesión y autenticación del sistema.
2) Evaluar la capacidad del sistema para capturar y gestionar datos de emergencias de manera precisa.
3) Probar la generación de informes detallados a partir de los datos registrados.
4) Evaluar la usabilidad del sistema para asegurar una interfaz intuitiva y fácil de usar.
5) Comprobar la seguridad del sistema para proteger la confidencialidad e integridad de los datos sensibles.
6) Verificar la confiabilidad y eficiencia del sistema en general.

# Funcionalidades a probar
## Cypress ejecutandose
![](https://i.imgur.com/qHLLJOk.png)

## Lista de test a realizar
![](https://i.imgur.com/FmbUSvc.png)

# Set de pruebas
## Tests de autenticación
1) Verificar inicio de sesión con *credenciales VACÍAS*
    - No colocar nada en el campo de usuario.
    - No colocar nada en el campo de password.
![](https://i.imgur.com/FOW0Skw.png)

2) Verificar inicio de sesión (usuario con mayúsculas)
    - Colocar usuario con mayúsculas.
    - Colocar password.
![](https://i.imgur.com/NTvOcVL.png)

3) Verificar inicio de sesión con *credenciales CORRECTAS*
    - Colocar usuario
    - Colocar password
![](https://i.imgur.com/ezHhjZP.png)

4) Verificación de cerrar sesión
    - Hacer click en "cerra sesión"
![](https://i.imgur.com/iuX2YVU.png)

## Tests al módulo de reportes
1) Dirigirse a inicio
![](https://i.imgur.com/dqNQugh.png)
2) Crear reporte
![](https://i.imgur.com/nef54CY.png)
3) Verificar campos vacíos
![](https://i.imgur.com/JYMOeti.png)
4) Editar reporte
![](https://i.imgur.com/zdytZ80.png)
5) Generar PDF
![](https://i.imgur.com/OJPiKXq.png)
6) Filtrado de un reporte
![](https://i.imgur.com/bgBfka6.png)
7) Eliminar un reporte
![](https://i.imgur.com/u131NDp.png)

## Tests al módulo de informes
1) Filtrar por todos los tipos de servicios
![](https://i.imgur.com/jPeUUYL.png)
2) Filtrar por servicio específico
![](https://i.imgur.com/vyFO292.png)
3) Filtrar, rango de fecha erróneo
![](https://i.imgur.com/ys2k6vN.png)
4) Búsqueda por tabla
![](https://i.imgur.com/dAozxVp.png)

## Tests al modulo de personal
1) Agregar usuario
![](https://i.imgur.com/sRmMv5j.png)
2) Agregar usuario repetido
![](https://i.imgur.com/SR4EFcC.png)
3) Editar usuario
![](https://i.imgur.com/lefeYgU.png)
4) Eliminar usuario
![](https://i.imgur.com/eTNhs7a.png)

## Tests de navegación
1) Dirigirse al inicio
![](https://i.imgur.com/ApXUYWk.png)
2) Dirigirse al módulo de reportes
![](https://i.imgur.com/FIPaBNi.png)
3) Dirigirse al módulo de informes
![](https://i.imgur.com/zpzucsD.png)
4) Dirigirse al módulo de personal
![](https://i.imgur.com/4NLaXtl.png)
5) Dirigirse al submódulo de servicios
![](https://i.imgur.com/gQe7hNx.png)
6) Dirigirse al submódulo de vehiculos
![](https://i.imgur.com/XWwjLEq.png)
7) Dirigirse al submódulo de hospitales
![](https://i.imgur.com/zgNliQt.png)

## Tests al modulo de recursos
### Tests de Submódulo de *Servicios*
1) Crear servicio
![](https://i.imgur.com/mmYzwK3.png)
2) Editar servicio
![](https://i.imgur.com/5cmWXCA.png)
3) Eliminar servicio 
![](https://i.imgur.com/PmFtqFS.png)
### Tests al Subódulo de *Vehículos*
1) Crear vehículo
![](https://i.imgur.com/NZnwJdi.png)
2) Editar vehículo
![](https://i.imgur.com/C2l6nST.png)
3) Eliminar vehículo
![](https://i.imgur.com/B7SHYPQ.png)

### Tests al Submódulo de *Hospitales*
1) Crear hospitales
![](https://i.imgur.com/qtE7O8G.png)
2) Editar hospitales
![](https://i.imgur.com/Q7ZgFkT.png)
3) Eliminar hospitales
![](https://i.imgur.com/v1IpYrj.png)

# Recursos
## Requerimientos de Entornos – Hardware 
### Servidores de Aplicación
- Procesador: Mínimo de 4 núcleos, preferiblemente 8 núcleos o más.
- Memoria RAM: Mínimo 8 GB, se recomiendan 16 GB o más.
- Almacenamiento: Mínimo 100 GB de espacio en disco duro.
- Sistema Operativo: Linux o Windows, dependiendo de las preferencias del sistema y software.
### Bases de Datos
- Procesador: Dependerá de la carga de trabajo, pero se recomiendan múltiples núcleos.
- Memoria RAM: Mínimo 8 GB, se recomiendan 16 GB o más.
- Almacenamiento: Capacidad suficiente para la base de datos y las copias de seguridad.
### Equipos de PC para Testers
- Procesador: Dual-core o superior.
- Memoria RAM: Mínimo 4 GB, se recomiendan 8 GB o más.
- Almacenamiento: Al menos 250 GB de espacio en disco duro.
- Sistema Operativo: Windows 10 o una distribución de Linux compatible con las herramientas de pruebas.
### Conectividad a la Red
- Conexión a Internet: Banda ancha con una velocidad razonable para la descarga de actualizaciones y acceso a recursos en línea.
### Accesos
- Cuentas de usuario con permisos adecuados para realizar pruebas.
- Requisitos de hardware y sistema operativo específicos según las plataformas móviles (por ejemplo, Android o iOS).
### Equipamiento de prueba adicional:
- Las características mínimas variarán según el equipo o software específico utilizado para las pruebas de integración, carga o rendimiento.

## Requerimientos de Entornos – Software 
### Software de pruebas
- Software de Pruebas: Cypress
- Versión de Cypress: [Especificar la versión de Cypress que se utilizará, por ejemplo, "Cypress 6.7.0"]
- Para instalar Cypress y configurarlo, sigue la documentación oficial de Cypress: [Proporcionar el enlace a la documentación oficial de Cypress]
### Navegadores web compatibles
- Navegadores Web Compatibles: Google Chrome, Mozilla Firefox, Microsoft Edge
- Se recomienda utilizar la última versión de cada navegador compatible con Cypress.
### Sistema operativo
- Sistema Operativo: Windows 10, macOS, Linux
- Asegurarse de que el sistema operativo esté actualizado y sea compatible con Cypress.
### Requisitos de servidores
- No se requieren servidores específicos para Cypress. La ejecución de pruebas en Cypress se realiza localmente en el entorno de desarrollo.
#### Base de datos
- Sistema de Gestión de Bases de Datos (DBMS): SQLite
- Versión de SQLite: [Especificar la versión de SQLite utilizada, por ejemplo, "SQLite 3.36.0"]
- SQLite es una base de datos de archivo que se utiliza comúnmente en aplicaciones web de Django. Asegurarse de que SQLite esté configurado y funcione correctamente con Django
### Herramientas de registro de rrrores
- Herramienta de Registro de Errores: [Especificar la herramienta que se utilizará para registrar errores, por ejemplo, "JIRA", "Bugzilla", "Trello", etc.]
- Proporcionar detalles sobre cómo acceder y utilizar esta herramienta para gestionar errores específicos de Cypress.
### Otro Software Relevante
- Lenguaje de Programación: Python
- Framework de Desarrollo Web: Django
- Python y Django se utilizan para el desarrollo del sistema y la configuración de la base de datos. Asegurase de que Python y Django estén correctamente configurados en el entorno de desarrollo.

## Herramientas de Pruebas Requeridas
Las siguientes herramientas y recursos serán necesarios para llevar a cabo las pruebas del sistema:

- Herramienta de pruebas: Cypress
- Versión de Cypress: [Especificar la versión de Cypress que se utilizará, por ejemplo, "Cypress 6.7.0"]
- Navegadores web compatibles: Google Chrome, Mozilla Firefox, Microsoft Edge
    - Se recomienda utilizar la última versión de cada navegador compatible con Cypress.
- Sistema operativo: Windows 10/11, macOS, Linux
    - Asegurarse de que el sistema operativo esté actualizado y sea compatible con Cypress.
- Sistema de gestión de bases de datos (DBMS): SQLite
- Versión de SQLite: [Especificar la versión de SQLite utilizada, por ejemplo, "SQLite 3.36.0"]
- Herramienta de registro de errores: [Especificar la herramienta que se utilizará para registrar errores, por ejemplo, "JIRA", "Bugzilla", "Trello", etc.]
## Personal
El equipo necesario para llevar a cabo las actividades de pruebas incluye:
- Un (1) Líder de pruebas (Alan David)
- Tres (3) Analistas de pruebas (Testers)(Alan David, Manuel Miguel, Jose Raul)
- Un (1) Especialistas en automatización de pruebas (Alan David)

# Planificación y Organización
Los procedimientos y la metodología de pruebas que se emplearán durante la ejecución del plan de pruebas de software se detallan a continuación:
### Revisión del documento de plan de pruebas
- El Líder de pruebas, en conjunto con los analistas de pruebas, revisará el documento de plan de pruebas para comprender los objetivos, alcance y requisitos del sistema a probar.
### Configuración del entorno de pruebas:
- Se asegurará de que los entornos de hardware y software necesarios estén debidamente configurados, incluyendo servidores de aplicación, bases de datos y equipos de prueba.
### Preparación de datos de prueba:
- Se generarán datos de prueba realistas que se utilizarán durante las pruebas. Esto incluirá datos de emergencias, usuarios, vehículos, hospitales y otros elementos necesarios.
### Diseño de casos de pruebas:
- El equipo de analistas de pruebas diseñará casos de prueba para cubrir todas las funcionalidades a probar. Los casos de prueba se basarán en los requisitos del sistema.
### Ejecución de pruebas manuales:
- Los analistas de pruebas ejecutarán manualmente los casos de prueba diseñados, registrando los resultados y cualquier problema que se detecte al momento de realizar las pruebas. 
- Se probarán todas las funcionalidades, incluyendo autenticación, navegación, módulos de reportes, informes, personal y recursos.
### Automatización de pruebas:
- El especialista en automatización de pruebas desarrollará scripts de pruebas automatizadas utilizando la herramienta Cypress. Estos scripts se centrarán en las áreas que integran el sistema y se ejecutarán de manera continua para identificar posibles problemas.
### Registro de errores:
- Cualquier error detectada durante las pruebas manuales o automatizadas se registrará en la herramienta de registro de errores especificada en los Requerimientos de Entornos – Software, por ultimo se proporcionará información detallada sobre cada error y su gravedad.
### Evaluación de seguridad:
- Se evaluará la seguridad del sistema para garantizar la protección de la confidencialidad y la integridad de los datos sensibles.
### Informe de resultados de pruebas:
- El líder de pruebas preparará un informe detallado de los resultados de las pruebas, que incluirá resúmenes de los casos de prueba, errores encontrados, estadísticas de ejecución y cualquier observación importante.
### Revisión y aprobación de pruebas:
- El informe de resultados de pruebas se revisará con el equipo de desarrollo y se obtendrá la aprobación para proceder con las correcciones y mejoras necesarias.
### Retesting:
- Después de que se realicen las correcciones y mejoras, se llevarán a cabo pruebas de retesting para asegurarse de que los errores se han solucionado de manera satisfactoria.
### Cierre de pruebas:
- Una vez que todas las pruebas hayan sido completadas y los errores se hayan corregido, se procederá al cierre de las pruebas y se considerará el sistema listo para su implementación.

## Matriz de Responsabilidades
Se puede hacer uso de una Matriz RACI (Responsable, Aprobador, Consultado, Informado). 

| Nombre                 | Responsable (R) | Aprobador (A) | Consultado (C) | Informado (I) |
|------------------------|-----------------|----------------|-----------------|---------------|
| Alan David Gonzales    | R               | A              | C               | I             |
| Manuel Miguel Miguel  | C               | I              | R               | A             |
| Jose Raul              | C               | I              | R               | A             |
| Otros Analistas        | C               | I              | R               | A             |


# Premisas
Las premisas relacionadas con las tareas de pruebas de software, incluyendo limitaciones de tiempo, disponibilidad de recursos que se asumen, uso de una metodología de pruebas, uso de una herramienta, entre otros, son las siguientes:

### Disponibilidad de recursos:
- Se asume que los recursos humanos necesarios, incluyendo el equipo de pruebas y el personal de desarrollo, estarán disponibles según lo programado en el plan.
### Acceso a entornos de pruebas:
- Se espera que los entornos de prueba, incluyendo servidores de aplicación, bases de datos y equipos de prueba, estén disponibles y debidamente configurados para realizar las pruebas de acuerdo a lo especificado.
### Datos de prueba:
- Se asume que se contarán con datos de prueba realistas y representativos para llevar a cabo las pruebas de software. Estos datos deberán estar disponibles en el momento programado.
### Metodología de pruebas
- Se seguirá la metodología de pruebas establecida en este plan, que incluye la revisión del documento de plan de pruebas, la configuración del entorno de pruebas, la preparación de datos de prueba, el diseño de casos de prueba, la ejecución de pruebas manuales y automatizadas, la evaluación de seguridad, la revisión de resultados.
### Herramienta de pruebas:
- Se utilizará la herramienta de pruebas Cypress, en la versión especificada, para la automatización de pruebas. La herramienta de registro de errores especificada en los Requerimientos de Entornos – Software se utilizará para gestionar los errores detectados durante las pruebas.
### Navegadores web compatibles:
- Se trabajará con los navegadores web compatibles mencionados en los Requerimientos de Entornos – Software, y se espera que estos navegadores estén debidamente configurados y actualizados.
### Sistema operativo:
- El sistema operativo en los equipos de prueba y desarrollo deberá ser compatible con Cypress y las herramientas utilizadas en el proceso de pruebas.
### Base de datos:
- Se utilizará el sistema de gestión de bases de datos SQLite en la versión especificada, y se asume que estará configurado correctamente para el funcionamiento del sistema.
### Lenguaje de programación y framework:
- Se utilizará Python como lenguaje de programación y Django como framework de desarrollo web, y se espera que estén correctamente configurados en el entorno de desarrollo.
### Acceso a la herramienta de registro de errores:
- Los miembros del equipo de pruebas tendrán acceso a la herramienta de registro de errores especificada y estarán capacitados para registrar y gestionar los errores de manera adecuada.

# Dependencias y Riesgos

| #   | Dependencias                                             | Plan de Mitigación                                           |
| --- | -------------------------------------------------------- | ------------------------------------------------------------ |
| 1   | Dependencia con desarrollos                               | Mantener una comunicación constante con el equipo de desarrollo para asegurarse de que se cumplan los plazos. Si se detectan retrasos, ajustar el cronograma de pruebas. |
| 2   | Dependencia con otros proyectos                          | Coordinar con los equipos externos para garantizar la disponibilidad y calidad de los componentes dependientes. |
| 3   | Disponibilidad de recursos                                | Garantizar que los recursos necesarios estén disponibles según lo programado. Reservar entornos de pruebas con anticipación y contar con un plan de contingencia en caso de escasez de recursos. |
| 4   | Restricciones de tiempo                                   | Definir un cronograma de pruebas realista y priorizar las actividades de acuerdo con el nivel de complejidad de las funcionalidades. |
| 5   | Premisas que resulten no ser ciertas                      | Verificar y confirmar la validez de las premisas antes de iniciar las pruebas. Si alguna premisa resulta no ser cierta, adaptar el plan. |


| #   | Riesgos                                                  | Plan de Contingencia                                          |
| --- | -------------------------------------------------------- | ------------------------------------------------------------ |
| 1   | Riesgo de incumplimiento del cronograma                   | Establecer un plan de contingencia que incluya la posibilidad de ajustar los tiempos establecidos, darle prioridad a las pruebas mas relevantes y volver a asignar recursos si es necesario. |
| 2   | Riesgo de fallos que afectan en producción                   | Implementar pruebas especificas y revisar cuidadosamente los resultados de las pruebas. Posterior a es establecer un proceso de revisión y aprobación antes de la implementación. |
| 3   | Riesgo de datos de prueba no suficientes                   | Evaluar y ajustar los datos de prueba para que sean más realistas. Si es necesario, crear pruebas adicionales que cubran casos específicos. |
| 4   | Riesgo de problemas de seguridad no detectados            | Realizar pruebas de seguridad especificas y detalladas, tambien, Colaborar con expertos en seguridad si es necesario para identificar y mitigar posibles riesgos. |
| 5   | Riesgo de cambios de alcance no comtemplados              | Establecer un proceso de gestión de cambios y asegurarse de que cualquier cambio en el alcance se evalúe en términos de impacto en las pruebas y se ajuste el plan. |

# Hallazgos
Para este testing realizada al sistema de registro y generación de informes ha logrado superar todas las pruebas planificadas , lo cual significa que no se han identificado problemas, errores en el sistema durante el proceso de pruebas. En este caso, no se generan hallazgos porque no se han encontrado errores que requieran una accion de correción.

Estas pruebas realizadas demuestran que el software ha demostrado ser funcional y confiable de acuerdo a los criterios de prueba establecidos en el plan de pruebas, es importante considerar esto ya que nos permite  o siguiere que el software está listo para producción. Es importante seguir monitoreando el software en su entorno de producción y estar preparado para abordar cualquier problema que pueda surgir una vez que los usuarios comiencen a utilizarlo en situaciones reales. 

# Recomendaciones
1) Continuar monitoreando el sistema en su entorno de producción y estar preparado para abordar cualquier problema que pueda surgir una vez que los usuarios comiencen a utilizarlo en situaciones reales.
2) Se recomienda hacer uso de la herramienta zypress para automatización de pruebas, para aplicaciones en ecosistema web.
3) Se recomienda implementar pruebas para asegurarse de que las nuevas modificaciones futuras que se integren al sistema no hayan introducido errores en funcionalidades previamente probadas.\
4) Se recomienda documentar los resultados de las pruebas y las observaciones relevantes. Esto proporcionará un registro histórico para futuras referencias y mejoras en el sistema.

# Glosario
1) Cypress:
Una herramienta de automatización de pruebas de extremo a extremo para aplicaciones web.
2) Herramienta de registro de errores: 
La herramienta utilizada para registrar y gestionar los errores detectados durante las pruebas, como JIRA, Bugzilla o Trello.
3) Entornos de pruebas: 
Los entornos de hardware y software necesarios para llevar a cabo las pruebas, incluyendo servidores de aplicación, bases de datos y equipos de prueba.
4) Automatización de pruebas: 
El proceso de escribir y ejecutar scripts de pruebas automatizadas utilizando una herramienta como Cypress.
5) Retesting: 
Pruebas realizadas después de que se hayan corregido los errores para asegurarse de que se han solucionado satisfactoriamente.
6) Matriz RACI: 
Una matriz que define roles y responsabilidades en un proyecto, especificando quién es Responsable (R), Aprobador (A), Consultado (C) e Informado (I) para cada tarea.


# Referencias [pendiente] Aqui va la parte de excel de plan de pruebas y otros si existiera
Lista de todos los documentos que pueden citarse como apoyo o para ampliar el contenido del plan de pruebas.













 














 


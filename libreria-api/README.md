# Librería API
Esta carpeta contiene una aplicación desarrollada para gestionar una librería, como parte de un [desafío](./DESAFIO%20NODE%20JS%20-%202024.pdf) para manejar CRUD de libros, autores y editoriales. El proyecto está estructurado con un backend en NestJS y una base de datos MS SQL Server usando el ORM Sequelize.

## Requisitos de Ejecución
Asegúrate de tener instalados los siguientes entornos y herramientas antes de ejecutar la aplicación:

- **Node.js**: versión 14.17.3 o superior
- **npm**: versión 6.14.13 o superior
- **NestJS CLI**: versión 10.0.0
- **MS SQL Server**: versión compatible con Sequelize 6.37.3
## Instalación
Para instalar las dependencias y configurar el entorno de desarrollo local, sigue estos pasos:

1. **Clonar el Repositorio**:

Utiliza Git para clonar el repositorio desde Github.

2. **Instalar Dependencias**:

Ejecuta el siguiente comando desde la raíz del proyecto para instalar todas las dependencias necesarias:

```bash
npm install
```
## Ejecución
Para iniciar el servidor localmente, ejecuta el siguiente comando desde la raíz del proyecto:

```bash
npm start
```
Esto iniciará el servidor de backend en modo de producción.

El servidor estará disponible en http://localhost:3000.
## Funcionalidades
- **CRUD de Libros**: Permite crear, leer, actualizar y eliminar libros. Cada libro está asociado a uno o más autores y a una editorial.
- **CRUD de Autores**: Permite gestionar los autores, con validaciones específicas para DNI.
- **CRUD de Editoriales**: Permite gestionar las editoriales, con validaciones para el CUIT.
- **Validaciones**: Verificaciones de formato para DNI y CUIT, y normalización de fechas.
- **Consultas Avanzadas**: Consulta general de libros con opciones de filtrado por categoría literaria y paginación.
## Endpoints
Los endpoints cumplen con la nomenclatura RESTful. Puedes probarlos utilizando Swagger. La documentación está disponible en http://localhost:3000/.
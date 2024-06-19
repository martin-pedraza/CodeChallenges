# Cliente Clima App

Esta carpeta contiene una aplicación desarrollada como parte de un [challenge](./CHALLENGE%20-%20Intuit.pdf) para Intuit. El proyecto está estructurado con un frontend en Angular utilizando Bootstrap y un backend en Express.js con base de datos en MS SQL Server. El backend realiza un CRUD de empleados, mientras que el frontend consume una API para mostrar el pronóstico del clima según la ciudad ingresada.

## Requisitos de Ejecución

Asegúrate de tener instalados los siguientes entornos y herramientas antes de ejecutar la aplicación:

- **Node.js**: versión 14.17.3 o superior
- **npm**: versión 6.14.13 o superior
- **Angular CLI**: versión 18.0.4
- **Express.js**: versión 4.16.1
- **MS SQL Server**: versión compatible con Sequelize 6.37.3

## Instalación

Para instalar las dependencias y configurar el entorno de desarrollo local, sigue estos pasos:

1. **Clonar el Repositorio**:

Utiliza Git para clonar el repositorio desde Github.


2. **Instalar Dependencias**:

Ejecuta el siguiente comando desde la raíz del proyecto para instalar todas las dependencias necesarias tanto para el frontend como para el backend:

```properties
npm run install-all
```

## Ejecución de los 

Para iniciar los servidores localmente, ejecuta el siguiente comando desde la raíz del proyecto:

```properties
npm start
```

Este script iniciará automáticamente los servidores tanto para el frontend como para el backend, usando los comandos `npm start` en cada carpeta respectivamente.

- El servidor backend estará disponible en `http://localhost:3000`.
- El servidor frontend de Angular estará disponible en `http://localhost:4200`.
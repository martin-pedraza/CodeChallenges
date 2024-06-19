# Gestor de Notas

Esta carpeta contiene una aplicación de gestión de notas, desarrollada como parte de un [challenge](./CHALLENGE.md) para Ensolvers. El proyecto está estructurado con un frontend en Angular utilizando Bootstrap y un backend en Express.js con base de datos MS SQL Server.

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

Ejecuta el script `install_dependencies.sh` desde la raíz del proyecto:

```bash
./install_dependencies.sh
```

Este script instalará las dependencias necesarias tanto para el frontend como para el backend. Asegúrate de que el script tenga permisos de ejecución (`chmod +x install_dependencies.sh`) si es necesario.

## Ejecución de los Servidores

Para iniciar los servidores localmente, puedes usar el script `start_servers.sh` que se encuentra en la raíz del proyecto:

```bash
./start_servers.sh
```

Este script iniciará automáticamente los servidores tanto para el frontend como para el backend, usando los comandos `npm start` en cada carpeta respectivamente.

- El servidor backend estará disponible en `http://localhost:3000`.
- El servidor frontend de Angular estará disponible en `http://localhost:4200`.

## Iniciar Sesión

Para iniciar sesión en la aplicación, utiliza las credenciales predeterminadas:

1. Usuario: admin
   - Clave: 1234

2. Usuario: otro
   - Clave: 1234
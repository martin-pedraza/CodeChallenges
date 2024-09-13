# Gestor de Notas

This folder contains a note management application developed as part of a [challenge](./CHALLENGE.md) for Ensolvers. The project is structured with an Angular frontend using Bootstrap and an Express.js backend with an MS SQL Server database.

## Prerequisites

Make sure you have the following environments and tools installed before running the application:

- **Node.js**: version 14.17.3 or higher
- **npm**: version 6.14.13 or higher
- **Angular CLI**: version 18.0.4
- **Express.js**: version 4.16.1
- **MS SQL Server**: version compatible with Sequelize 6.37.3

## Installation

To install the dependencies and set up the local development environment, follow these steps:

1. **Clone the Repository**:

Use Git to clone the repository from GitHub.

2. **Install Dependencies**:

Run the install_dependencies.sh script from the project's root directory:

```bash
./install_dependencies.sh
```

This script will install the necessary dependencies for both the frontend and backend. Make sure the script has execution permissions (chmod +x install_dependencies.sh) if needed.

## Running the Servers

To start the servers locally, you can use the start_servers.sh script located in the project's root directory:

```bash
./start_servers.sh
```

This script will automatically start the servers for both the frontend and backend, using the npm start command in each folder respectively.

- The backend server will be available at `http://localhost:3000`.
- The Angular frontend server will be available at `http://localhost:4200`.

## Login

To log in to the application, use the default credentials:

1. Usuario: admin
   - Clave: 1234

2. Usuario: otro
   - Clave: 1234

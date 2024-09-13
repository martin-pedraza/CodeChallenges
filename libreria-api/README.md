# Librería API

This folder contains an application developed to manage a library, as part of a [challenge](./DESAFIO%20NODE%20JS%20-%202024.pdf) to handle CRUD operations for books, authors, and publishers. The project is structured with a backend in NestJS and an MS SQL Server database using the Sequelize ORM.

## Prerequisites

Make sure you have the following environments and tools installed before running the application:

- **Node.js**: version 14.17.3 or higher
- **npm**: version 6.14.13 or higher
- **NestJS CLI**: version 10.0.0
- **MS SQL Server**: version compatible with Sequelize 6.37.3

## Installation

To install the dependencies and set up the local development environment, follow these steps:

1. **Clone the Repository**:

Use Git to clone the repository from GitHub.

2. **Install Dependencies**:

Run the following command from the project's root directory to install all necessary dependencies:

```bash
npm install
```

## Running the Application

To start the server locally, run the following command from the project's root directory:

```bash
npm start
```
This will start the backend server in production mode.

The server will be available at `http://localhost:3000`.

## Features

- **CRUD for Books**: Allows creating, reading, updating, and deleting books. Each book is associated with one or more authors and a publisher.
- **CRUD for Authors**: Manages authors with specific validations for DNI (National Identity Document).
- **CRUD for Publishers**: Manages publishers with validations for CUIT (Unique Tax Identification Code).
- **Validations**: Format checks for DNI and CUIT, and date normalization.
- **Advanced Queries**: General query of books with filtering options by literary category and pagination.
  
## Endpoints

The endpoints follow RESTful nomenclature. You can test them using Swagger. Documentation is available at `http://localhost:3000/`.

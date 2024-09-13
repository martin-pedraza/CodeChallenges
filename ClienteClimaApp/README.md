# Cliente Clima App

This folder contains an application developed as part of a [challenge](./CHALLENGE%20-%20Intuit.pdf) for Intuit. The project is structured with an Angular frontend using Bootstrap and an Express.js backend with an MS SQL Server database. The backend performs a CRUD operation for employees, while the frontend consumes an API to display the weather forecast based on the entered city.

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

Run the following command from the project's root directory to install all the necessary dependencies for both the frontend and backend:

```properties
npm run install-all
```

## Running the Servers

To start the servers locally, run the following command from the project's root directory:

```properties
npm start
```
This command will automatically start both the frontend and backend servers, using the `npm start` command in each folder respectively.

- The backend server will be available at `http://localhost:3000`.
- The Angular frontend server will be available at `http://localhost:4200`.

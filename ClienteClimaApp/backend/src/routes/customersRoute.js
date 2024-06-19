const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');
const { mandatoryFieldsValidator, fieldsFormatValidator } = require('../validators/customerValidator');

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: API para la gestión de clientes
 */

/**
 * @swagger
 * /customers/getAll:
 *   get:
 *     summary: Trae la lista de clientes
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Una lista de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombres:
 *                     type: string
 *                   apellidos:
 *                     type: string
 *                   fechaDeNacimiento:
 *                     type: string
 *                   cuit:
 *                     type: string
 *                   domicilio:
 *                     type: string
 *                   telefonoCelular:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get('/getAll', customersController.getAll);

/**
 * @swagger
 * /customers/get/{id}:
 *   get:
 *     summary: Trae un cliente por ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numero de ID del cliente a traer
 *     responses:
 *       200:
 *         description: Solo un cliente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombres:
 *                   type: string
 *                 apellidos:
 *                   type: string
 *                 fechaDeNacimiento:
 *                   type: string
 *                 cuit:
 *                   type: string
 *                 domicilio:
 *                   type: string
 *                 telefonoCelular:
 *                   type: string
 *                 email:
 *                   type: string
 */
router.get('/get/:id', customersController.get);

/**
 * @swagger
 * /customers/search/{name}:
 *   get:
 *     summary: Busca clientes por nombre
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del cliente a buscar
 *     responses:
 *       200:
 *         description: Una lista de clientes que concuerda con el criterio de busqueda
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombres:
 *                     type: string
 *                   apellidos:
 *                     type: string
 *                   fechaDeNacimiento:
 *                     type: string
 *                   cuit:
 *                     type: string
 *                   domicilio:
 *                     type: string
 *                   telefonoCelular:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get('/search/:name', customersController.search);

/**
 * @swagger
 * /customers/logs:
 *   get:
 *     summary: Trae una lista de logs
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Una lista de logs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   error:
 *                     type: string
 */
router.get('/logs', customersController.logs);

/**
 * @swagger
 * /customers/insert:
 *   post:
 *     summary: Agrega un nuevo cliente
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombres
 *               - apellidos
 *               - cuit
 *               - email
 *               - telefonoCelular
 *             properties:
 *                 nombres:
 *                   type: string
 *                 apellidos:
 *                   type: string
 *                 fechaDeNacimiento:
 *                   type: string
 *                   pattern: '^(0\d{1})\/(0\d{1})\/(19\d{2})$'
 *                 cuit:
 *                   type: string
 *                   pattern: '^(\d{2})-(\d{8})-(\d{1})$'
 *                 domicilio:
 *                   type: string
 *                 telefonoCelular:
 *                   type: string
 *                 email:
 *                   type: string
 *                   example: abc@gmail.com
 *     responses:
 *       200:
 *         description: Cliente creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombres:
 *                   type: string
 *                 apellidos:
 *                   type: string
 *                 fechaDeNacimiento:
 *                   type: string
 *                   pattern: '^(0\d{1})\/(0\d{1})\/(19\d{2})$'
 *                 cuit:
 *                   type: string
 *                   pattern: '^(\d{2})-(\d{8})-(\d{1})$'
 *                 domicilio:
 *                   type: string
 *                 telefonoCelular:
 *                   type: string
 *                 email:
 *                   type: string
 *                   example: abc@gmail.com
 */
router.post('/insert', [mandatoryFieldsValidator, fieldsFormatValidator], customersController.insert);

/**
 * @swagger
 * /customers/update/{id}:
 *   put:
 *     summary: Actualiza un cliente existente
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numero del ID del cliente para actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 nombres:
 *                   type: string
 *                 apellidos:
 *                   type: string
 *                 fechaDeNacimiento:
 *                   type: string
 *                   pattern: '^(0\d{1})\/(0\d{1})\/(19\d{2})$'
 *                 cuit:
 *                   type: string
 *                   pattern: '^(\d{2})-(\d{8})-(\d{1})$'
 *                 domicilio:
 *                   type: string
 *                 telefonoCelular:
 *                   type: string
 *                 email:
 *                   type: string
 *                   example: abc@gmail.com
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombres:
 *                   type: string
 *                 apellidos:
 *                   type: string
 *                 fechaDeNacimiento:
 *                   type: string
 *                   pattern: '^(0\d{1})\/(0\d{1})\/(19\d{2})$'
 *                 cuit:
 *                   type: string
 *                   pattern: '^(\d{2})-(\d{8})-(\d{1})$'
 *                 domicilio:
 *                   type: string
 *                 telefonoCelular:
 *                   type: string
 *                 email:
 *                   type: string
 *                   example: abc@gmail.com
 */
router.put('/update/:id', [fieldsFormatValidator], customersController.update);

module.exports = router;
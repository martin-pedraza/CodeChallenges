const customerService = require('../services/customerService');
const logService = require('../services/logService');
const { validationResult } = require('express-validator');

const customersController = {
    getAll: async (req, res) => {
        const customers = await customerService.findAll();
        return res.status(200).json({ customers });
    },
    get: async (req, res) => {
        const customerId = req.params.id;
        const customer = await customerService.findById(customerId);
        return res.status(200).json({ customer });
    },
    search: async (req, res) => {
        const name = req.params.name;
        const customers = await customerService.findByName(name);
        return res.status(200).json({ customers });
    },
    insert: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            logService.create(errors);
            return res.status(400).json({ errors: errors.array() });
        }
        const data = req.body;
        const customer = await customerService.create(data);
        return res.status(200).json({ customer });
    },
    update: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            logService.create(errors);
            return res.status(400).json({ errors: errors.array() });
        }
        const customerId = req.params.id;
        let customer = await customerService.findById(customerId);
        if (!customer) {
            const message = 'Cliente no encontrado.';
            logService.create([ message ]);
            return res.status(404).json({ error: message });
        }
        const data = req.body;
        customer = await customerService.updateById(customerId, data)
        return res.status(200).json({ customer });
    },
    logs: async (req, res) => {
        const logs = await logService.findAll();
        return res.status(200).json({ logs });
    },
};

module.exports = customersController;
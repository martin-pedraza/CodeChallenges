const db = require('../database/models')
const { Op } = require('sequelize');

const customerService = {
    findAll: () => {
        return db.Cliente.findAll();
    },
    findById: (id) => {
        return db.Cliente.findByPk(id);
    },
    findByName: (name) => {
        return db.Cliente.findAll({
            where: {
                nombres: {
                    [Op.like]: '%' + name + '%'
                }
            }
        });
    },
    create: (data) => {
        return db.Cliente.create({
            nombres: data.nombres,
            apellidos: data.apellidos,
            fechaDeNacimiento: data.fechaDeNacimiento,
            cuit: data.cuit,
            domicilio: data.domicilio,
            telefonoCelular: data.telefonoCelular,
            email: data.email,
        });
    },
    updateById: async (customerId, data) => {
        await db.Cliente.update(data, {
            where: { id: customerId }
        });
        return db.Cliente.findByPk(customerId);
    },
};

module.exports = customerService;
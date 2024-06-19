const db = require('../database/models')

const logService = {
    findAll: () => {
        return db.Log.findAll();
    },
    create: (errorsOrMessages) => {
        let errorMessages;

        if (Array.isArray(errorsOrMessages)) {
            errorMessages = errorsOrMessages.join(' ');
        } else if (errorsOrMessages.array) {
            errorMessages = errorsOrMessages.array().map(error => error.msg).join(' ');
        } else {
            errorMessages = errorsOrMessages;
        }

        return db.Log.create({
            error: errorMessages,
        });
    },
};

module.exports = logService;
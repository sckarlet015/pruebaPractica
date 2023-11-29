const express = require('express');
const {newContact,
    allContacts,
    contacDetailsId,
    updateContatc,
    destroyContac} = require("../handlers/contactoHandler")

const conatcRouter = express.Router();

conatcRouter.post('/newContact', newContact);
conatcRouter.get('/allContacts/:id', allContacts);
conatcRouter.get('/contacDetails/:id', contacDetailsId);
conatcRouter.put('/updateContac/:id', updateContatc);
conatcRouter.delete('/destroyContac/:id', destroyContac);

module.exports = conatcRouter
const { Router } = require('express');
const express = require("express");

const {newContact, allContacts, contacDetailsId, updateContatc, destroyContac} = require("../handlers/usuarioHandler")

const router = Router();
router.use(express.json());

router.post('/newContact', newContact);
router.get('/allContacts', allContacts);
router.get('/contacDetails/:id', contacDetailsId);
router.put('/updateContac/:id', updateContatc);
router.delete('/destroyContac/:id', destroyContac);

module.exports = router;

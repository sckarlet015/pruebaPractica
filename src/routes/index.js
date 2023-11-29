const { Router } = require('express');
const express = require("express");

const conatcRouter = require("./contactoRoute")
const usuarioRouter = require("./usuarioRoute")
const mixRouter = require("./mixRouter")

const router = Router();
router.use(express.json());

router.use("/contacto", conatcRouter);
router.use("/usuario", usuarioRouter);
router.use("/mix", mixRouter);

module.exports = router;

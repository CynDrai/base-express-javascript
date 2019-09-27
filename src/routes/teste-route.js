"use strict";

const express = require('express');
const controller = require('../controllers/test-controller');
const router = express.Router();

/*
  Routes for test
 */
router.put('/createOrUpdate', controller.createOrUpdate);
router.get('/findById/:id', controller.findById);
router.get('/list', controller.list);
router.delete('/:id', controller.delete);

module.exports = router;
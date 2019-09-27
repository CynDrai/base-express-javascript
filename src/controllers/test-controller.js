"use strict";

/**
 * Use this route to INSERT or UPDATE in some Database
 */
exports.createOrUpdate = async (req, res) => {
  // Your code below
};

/**
 * Use this route to find some data by id - EXAMPLE
 */
exports.findById = async (req, res) => {
  // Your code below
  const parameter = Number(req.params.id);

  res.status(200).send({text: "Some text here!", parameter: parameter});
};

/**
 * Use this route to list all data from some Entity
 */
exports.list = async (req, res) => {
  // Your code below
};

/**
 * Use this route to delete data from Database
 */
exports.delete = async (req, res) => {
  // Your code below
};
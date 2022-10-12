const { Router } = require("express");
const Role = require("../models").role;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const roles = await Role.findAll({ attributes: ["name", "id"] });
    res.status(200).send(roles);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

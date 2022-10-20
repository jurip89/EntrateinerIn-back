const { Router } = require("express");
const Role = require("../models").role;
const UserRole = require("../models").userRole;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const roles = await Role.findAll({ attributes: ["name", "id"] });
    res.status(200).send(roles);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const newSkill = await UserRole.create(req.body);
    console.log(newSkill);
    res.status(200).send(newSkill);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

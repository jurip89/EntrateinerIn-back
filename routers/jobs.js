const { Router } = require("express");
const Job = require("../models").job;
const User = require("../models").user;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const jobs = await Job.findAll({
      include: { model: User, attributes: ["name", "id", "email"] },
    });
    res.status(200).send(jobs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

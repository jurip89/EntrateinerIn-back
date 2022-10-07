const { Router } = require("express");
const Job = require("../models").job;
const User = require("../models").user;
const Category = require("../models").role;
const Location = require("../models").jobLocation;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const jobs = await Job.findAll({
      include: [
        { model: User, attributes: ["name", "email"] },
        { model: Category, attributes: ["name"] },
      ],
    });
    res.status(200).send(jobs);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const theOne = await Job.findByPk(id, {
      include: [
        { model: User, attributes: ["name", "email",'profilePic'] },
        { model: Category, attributes: ["name"] },
        
      ],
    });
    !theOne && res.status(404).send("no Job Found");
    res.status(200).send(theOne);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

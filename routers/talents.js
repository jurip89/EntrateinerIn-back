const { Router } = require("express");
const User = require("../models").user;
const Image = require('../models').image
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const talents = await User.findAll({
      attributes: ["name", "profilePic", "id", "email", "intro"],
      where: { isRecruiter: false },
        require: false,
      include:{model:Image, attributes:['source','id']}
    });
    res.send(talents);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

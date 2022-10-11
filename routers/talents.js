const { Router } = require("express");
const User = require("../models").user;
const Image = require("../models").image;
const Review = require("../models").review;
const Role = require("../models").role;
const UserRole = require("../models").userRole;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const talents = await User.findAll({
      attributes: ["name", "profilePic", "id"],
      where: { isRecruiter: false },
     include:{
          model: Role,
          attributes: ["name", "id"],
          through: { attributes: [] },
        },
    });
    res.send(talents);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const theOne = await User.findByPk(id, {
      attributes: ["name", "profilePic", "id", "email", "intro"],
      where: { isRecruiter: false },
      require: false,
      include: [
        { model: Image, attributes: ["source", "id"] },
        {
          model: Review,
          attributes: ["comment", "id", "updatedAt", "title"],
          include: { model: User, attributes: ["name", "profilePic","id"] },
        },
        {
          model: Role,
          attributes: ["name", "id"],
          through: { attributes: ["yearsOfExperience"] },
        },
      ],
    });
    !theOne && res.status(404).send("Missing Person!");
    res.status(200).send(theOne);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

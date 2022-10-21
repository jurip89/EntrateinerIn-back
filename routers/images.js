const { Router } = require("express");
const User = require("../models").user;
const Image = require("../models").image;
const router = new Router();
const authMiddleware = require("../auth/middleware");

router.delete("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  try {
    const theOne = await Image.findByPk(id);
    !theOne && res.status(404).send("no Image Found!");
    const killed = await theOne.destroy();
    res.send(killed);
  } catch (error) {
    next(error);
  }
});

router.post("/",authMiddleware, async (req, res, next) => {
  try {
    const newImg = await Image.create(req.body);
    res.status(200).send(newImg);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  const images =await Image.findAll()
  res.send(images)
})

module.exports = router;

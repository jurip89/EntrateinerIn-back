const { Router } = require("express");
const Review = require("../models").review;
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;

const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const uId = req.user.id;
    console.log({body:req.body});
    //console.log(uId);
    const newReview = await Review.create({ ...req.body, authorId: uId });
    console.log(newReview)
    const newToSend = await Review.findByPk(newReview.id, {
     include:{ model: User,
            as: "authorReview",
            attributes: ["name", "profilePic", "id"],}
    });
    console.log(newToSend);
    res.status(200).send(newToSend);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const theOne = await Review.findByPk(id);
    !theOne && res.status(404).send("Not Found!!!");
    await theOne.destroy();
    res.status(200).send(`element with id: ${id} destroyed!!!`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

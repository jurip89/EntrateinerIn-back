const { Router } = require("express");
const Review = require("../models").review;
const authMiddleware = require("../auth/middleware");
const { toData } = require("../auth/jwt");

const router = new Router();

router.post('/',authMiddleware, async (req, res, next) => {
    try {
        const newReview = await Review.create(req.body)
        res.status(200).send(newReview)
    } catch (error) {
        next(error)
    }
});

router.delete('/:id',authMiddleware, async (req, res, next) => {
    try {
        const { id } = req.params;
        const theOne = await Review.findByPk(id);
        !theOne && res.status(404).send('Not Found!!!')
        await theOne.destroy()
        res.status(200).send(`element with id: ${id} destroyed!!!`)
    } catch (error) {
        next(error)
    }
})

module.exports = router;
const { Router } = require("express");
const User = require('../models').user
const Applicant = require("../models").applicant;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const uId = req.user.id;
    const { jobId } = req.body;

    const newApplicant = await Applicant.create({
      applicantId: uId,
      status: "pending",
      jobId,
    });
    console.log(newApplicant);
    res.status(200).send(newApplicant);
  } catch (error) {
    next(error);
  }
});


router.patch('/:id', authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  try {
    const theOne = await Applicant.findByPk(id, { include: User });
    console.log(theOne)
    !theOne && res.status(404).send('Not Found!')
    const updatedOne = await theOne.update(req.body);
    res.send(updatedOne)
  } catch (error) {
    next(error)
  }
});

router.delete('/:id',authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  try {
    const theOne = await Applicant.findByPk(id);
    !theOne && res.status(404).send('Not found!')
    await theOne.destroy()
    res.status(200).send('Destroyed')
  } catch (error) {
    
  }
})



module.exports = router;

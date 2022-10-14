const { Router } = require("express");
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

module.exports = router;

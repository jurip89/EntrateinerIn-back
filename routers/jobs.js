const { Router } = require("express");
const Job = require("../models").job;
const User = require("../models").user;
const Category = require("../models").role;
const Applicant = require("../models").applicant;
const authMiddleware = require("../auth/middleware");
const { toData } = require("../auth/jwt");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const jobs = await Job.findAll({
      include: [
        { model: User, attributes: ["name", "email"] },
        { model: Category, attributes: ["name", "id"] },
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
        { model: User, attributes: ["name", "email", "profilePic"] },
        { model: Category, attributes: ["name", "id"] },
      ],
    });
    !theOne && res.status(404).send("no Job Found");
    res.status(200).send(theOne);
  } catch (error) {
    next(error);
  }
});

router.get("/myjobs/recruiter", authMiddleware, async (req, res, next) => {
  try {
    const auth =
      req.headers.authorization && req.headers.authorization.split(" ");
    const uId = toData(auth[1]).userId;
    const myJobs = await Job.findAll({
      where: { userId: uId },
      include: [
        { model: User, attributes: ["name", "email", "profilePic"] },
        { model: Category, attributes: ["name", "id"] },
      ],
    });
    res.status(200).send(myJobs);
  } catch (error) {
    next(error);
  }
});

router.get("/myjobs/recruiter/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  try {
    const uId = req.user.userId;

    const theOne = await Job.findByPk(id, {
      where: { userId: uId },

      include: [
        { model: User, attributes: ["name", "email", "profilePic"] },
        { model: Category, attributes: ["name", "id"] },
        {
          model: User,
          as: "applicantsJob",
          attributes: ["name", "profilePic", "id"],
          through: { attributes: ["status", "id"] },
          include: {
            model: Category,
            attributes: ["id", "name"],
            through: { attributes: ["yearsOfExperience"] },
          },
        },
      ],
    });
    !theOne && res.status(404).send("Not Found!!");
    res.status(200).send(theOne);
  } catch (error) {
    next(error);
  }
});

router.get("/myjobs/talent", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.user;
    const myJobs = await User.findByPk(id, {
      attributes: [],
      include: {
        model: Job,
        as: "jobApplicants",
        through: { attributes: ["status"] },
        include: [
          { model: User, attributes: ["name", "id", "profilePic"] },
          { model: Category, attributes: ["name", "id"] },
        ],
      },
    });
    res.send(myJobs.jobApplicants);
  } catch (error) {
    next(error);
  }
});

router.post("/",  async (req, res, next) => {
  try {
    console.log({body:req.body});
    const newJob = await Job.create(req.body);

    console.log({newJob});
    if(newJob){const theOneToSend = await Job.findByPk(newJob.id, {
      include: [
        { model: User, attributes: ["name", "email", "profilePic"] },
        { model: Category, attributes: ["name", "id"] },
      ],
    });
    console.log({theOneToSend});
      res.status(200).send(theOneToSend);
    }
    res.status(400).send('Bad, really bad!')
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const auth =
      req.headers.authorization && req.headers.authorization.split(" ");
    const uId = toData(auth[1]).userId;

    const theOne = await Job.findByPk(id);
    !theOne && res.status(404).send("No job found!");
    uId !== theOne.userId && res.status(401).send("Unauthorized!!!!!");
    const destroyed = await theOne.destroy();
    res.send(destroyed);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const theOne = await Job.findByPk(id);
    !theOne && req.status(404).send("Not found!");
    const updatedOne = await theOne.update(req.body);
    if(updatedOne){
    const theOneToSend = await Job.findByPk(updatedOne.id, {
      include: [
        { model: User, attributes: ["name", "email", "profilePic"] },
        { model: Category, attributes: ["name", "id"] },
      ],
    });

      res.status(200).send(theOneToSend);
    } else {
      res.status(400).send('Bad, really bad request!')
    }
    
  } catch (error) {
    next(error);
  }
});

module.exports = router;

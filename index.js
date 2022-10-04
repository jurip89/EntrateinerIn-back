const express = require("express");
const corsMiddleWare = require("cors");
const talentsRouter = require("./routers/talents");
const jobsRouter = require("./routers/jobs");
const PORT = 4000;
const app = express();

app.use(corsMiddleWare());

app.use(express.json());

app.use("/talents", talentsRouter);
app.use("/jobs", jobsRouter);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

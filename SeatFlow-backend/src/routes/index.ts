import express from "express";
import movieRouter from "../modules/movie/movie.route";
import theaterRouter from "../modules/theater/theater.route";
const router = express.Router();

router.use("/movies", movieRouter);
router.use("/theaters", theaterRouter);

export default router;

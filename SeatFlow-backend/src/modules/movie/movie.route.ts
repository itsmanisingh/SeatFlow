import express from "express";
import * as MovieController from "./movie.controller";

const router = express.Router();

router.post("/", MovieController.createMovie);
router.post("/", MovieController.getMovies);
router.post("/recommended", MovieController.getTopRecommendedMovies);
router.post("/:id", MovieController.getMovieById);

export default router;

import express from "express";
import * as MovieController from "./movie.controller";
import { MovieSchema } from "./movie.validation";
import { validate } from "../../middlewares/validate";

const router = express.Router();

router.post("/", validate(MovieSchema), MovieController.createMovie);
router.post("/", MovieController.getMovies);
router.post("/recommended", MovieController.getTopRecommendedMovies);
router.post("/:id", MovieController.getMovieById);

export default router;

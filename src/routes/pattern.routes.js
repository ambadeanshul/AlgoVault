import { Router } from "express";
import { createProblem } from "../controllers/problem.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"; 

const router = Router();

// This middleware ensures ONLY logged-in users can access these routes
router.use(verifyJWT); 

// When someone sends a POST request to /api/v1/problems, run the createProblem function
router.route("/").post(createProblem);

export default router;
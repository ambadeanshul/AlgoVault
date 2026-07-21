import { Router } from "express";
import { toggleProblemLike } from "../controllers/like.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

// Like (upvote) a problem
router.post("/toggle/:problemId", toggleProblemLike);

export default router;
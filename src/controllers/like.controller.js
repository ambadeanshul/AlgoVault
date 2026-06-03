import { Like } from "../models/like.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const toggleProblemLike = asyncHandler(async (req, res) => {
    const { problemId } = req.params;
    
    // Simplified logic for upvoting a solution
    const like = await Like.create({ 
        problem: problemId, 
        likedBy: req.user._id 
    });

    return res.status(200).json(
        new ApiResponse(200, like, "Solution upvoted successfully")
    );
});

export { toggleProblemLike };
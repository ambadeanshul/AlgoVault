import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addComment = asyncHandler(async (req, res) => {
    const { problemId } = req.params;
    const { content } = req.body;

    if (!content) {
        throw new ApiError(400, "Content is required");
    }

    const comment = await Comment.create({ 
        content, 
        problem: problemId, 
        owner: req.user._id 
    });

    return res.status(201).json(
        new ApiResponse(201, comment, "Logic review comment added successfully")
    );
});

export { addComment };
import { Problem } from "../models/problem.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// This function handles saving a new DSA problem
const createProblem = asyncHandler(async (req, res) => {
    // 1. Grab the data sent by the user
    const { title, problemLink, difficulty, cppCode, timeComplexity, spaceComplexity } = req.body;

    // 2. Security Check: Make sure they didn't leave any required fields blank
    if (
        [title, problemLink, cppCode, timeComplexity, spaceComplexity].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields (title, link, code, complexities) are required!");
    }

    // 3. Create the new problem in MongoDB
    const problem = await Problem.create({
        title,
        problemLink,
        difficulty: difficulty || "Medium", 
        cppCode,
        timeComplexity,
        spaceComplexity,
        owner: req.user?._id 
    });

    // 4. Failsafe: Check if MongoDB actually saved it
    if (!problem) {
        throw new ApiError(500, "Something went wrong while saving the problem to AlgoVault");
    }

    // 5. Send a success message back
    return res.status(201).json(
        new ApiResponse(201, problem, "DSA Problem successfully logged in AlgoVault!")
    );
});

export { 
    createProblem 
};
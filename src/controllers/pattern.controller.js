import { Pattern } from "../models/pattern.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createPattern = asyncHandler(async (req, res) => {
    const { name, description } = req.body;
    
    if (!name || !description) {
        throw new ApiError(400, "Name and description are required");
    }

    const pattern = await Pattern.create({ 
        name, 
        description, 
        owner: req.user._id 
    });

    return res.status(201).json(
        new ApiResponse(201, pattern, "Pattern created successfully")
    );
});

export { createPattern };
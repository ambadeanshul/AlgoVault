import mongoose, {Schema} from "mongoose";

const patternSchema = new Schema({
    name: {
        type: String, // e.g., "Dynamic Programming", "Sliding Window"
        required: true
    },
    description: {
        type: String,
        required: true
    },
    problems: [
        {
            type: Schema.Types.ObjectId,
            ref: "Problem" // Links to your problems instead of videos
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export const Pattern = mongoose.model("Pattern", patternSchema)
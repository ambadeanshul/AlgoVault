import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const problemSchema = new Schema(
    {
        title: {
            type: String, 
            required: true,
            trim: true, 
            index: true 
        },
        problemLink: {
            type: String, 
            required: true,
        },
        difficulty: {
            type: String,
            enum: ['Easy', 'Medium', 'Hard'],
            default: 'Medium'
        },
        cppCode: {
            type: String, 
            required: true,
        },
        timeComplexity: {
            type: String, 
            required: true,
        },
        spaceComplexity: {
            type: String, 
            required: true,
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, 
    {
        timestamps: true
    }
)

problemSchema.plugin(mongooseAggregatePaginate)

export const Problem = mongoose.model("Problem", problemSchema)
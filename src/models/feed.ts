import {Schema, model} from "mongoose"

const Feed = new Schema({
    pubId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    },
    pubDate: {
        type: Date,
    },
})
    
Feed.index({pubId: 1}, {unique: true})

export default model("Feed", Feed)
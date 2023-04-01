import {Schema, model} from "mongoose"

// Schema para el feed de noticias, contiene un array de noticias
const Feed = new Schema({
    date: {
        type: Date,
        required: true,
    },
    articles: {
        type: Array,
        default: [],
    },    
})
    
Feed.index({date: 1}, {unique: true})

export default model("Feed", Feed)
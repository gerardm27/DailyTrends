import {Schema, model} from "mongoose"

// Schema para el feed de noticias, contiene la fecha, el título, la url y la fuente
const Feed = new Schema({
    date: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    } 
})
    
Feed.index({url: 1}, {unique: true})

export default model("Feed", Feed)
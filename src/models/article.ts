import {Schema, model} from "mongoose"

// Schema para el feed de noticias, contiene un array de noticias
const Article = new Schema({
    id : {       
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

})
    
Article.index({date: 1}, {unique: true})

export default model("Article", Article)
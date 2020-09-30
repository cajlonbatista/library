const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    capa: {
        type: String,
        required: true,
    },
    resumo: {
        type: String,
        required: true,
    },
    editora: {
        type: String,
        required: true,
    },
    edicao: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: false,
    },
    publishedAt: {
        type: Date,
        default: Date.now()
    },
    tags : [
        {
            type: String,
            required: true,
        }
    ]
});
ArticleSchema.plugin(mongoosePaginate);
mongoose.model("Article", ArticleSchema);
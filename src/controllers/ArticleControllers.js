const mongoose = require('mongoose');

const Article = mongoose.model("Article");

module.exports = {
    async index(req, res){
        var {page} = req.query;
        const articles = await Article.paginate({}, {page, limit: 8});
        articles.docs.reverse();
        return res.status(200).json(articles);
    },
    async store(req, res){
        const article = await Article.create(req.body);
        return res.status(201).json(article);
    },
    async show(req, res){
        const article = await Article.findById(req.params.id);
        return res.status(200).json(article);
    },
    async update(req, res){
        try {
            const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true});
            return res.status(201).json(article);
        } catch (err) {
            return res.send(err)
        }
    },
    async destoy(req, res){
        try {
            const article = await Article.findByIdAndRemove(req.params.id);
            return res.status(201).send();
        } catch (err) {
            return res.status(401).json({err});
        }
    }
}
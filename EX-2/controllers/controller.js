import {
    journalists,
    categories,
    articles,
} from "../models/data.js";

// 1. Articles Resource
// • GET /articles — Get all articles
// • GET /articles/:id — Get a single article by ID
// • POST /articles — Create a new article
// • PUT /articles/:id — Update an existing article
// • DELETE /articles/:id — Delete an article
// 2. Journalists Resource
// • GET /journalists — Get all journalists
// • GET /journalists/:id — Get a single journalist
// • POST /journalists — Create a new journalist
// • PUT /journalists/:id — Update journalist info
// • DELETE /journalists/:id — Delete a journalist
// • GET /journalists/:id/articles — Article by specific journalist
// 3. Categories Resource
// • GET /categories — Get all categories
// • GET /categories/:id — Get a single category
// • POST /categories — Add a new category
// • PUT /categories/:id — Update a category
// • DELETE /categories/:id — Delete a category
// • GET /categories/:id/articles — Articles from a categories

export const getAllArticles = (req, res) => {
    res.json(articles);
};

export const getArticleById = (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) return res.status(404).json({ error: "Article not found" });
    res.json(article);
};

export const createArticle = (req, res) => {
    const { title, content, journalistId, categoryId } = req.body;
    if (!title || !content || !journalistId || !categoryId) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const newArticle = { id: articles.length + 1, title, content, journalistId, categoryId };
    articles.push(newArticle);
    res.status(201).json(newArticle);
};

export const updateArticle = (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) return res.status(404).json({ error: "Article not found" });

    const { title, content, journalistId, categoryId } = req.body;
    if (title) article.title = title;
    if (content) article.content = content;
    if (journalistId) article.journalistId = journalistId;
    if (categoryId) article.categoryId = categoryId;

    res.json(article);
};

export const deleteArticle = (req, res) => {
    const index = articles.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Article not found" });

    articles.splice(index, 1);
    res.status(204).send();
};

export const getAllJournalists = (req, res) => {
    res.json(journalists);
};

export const getJournalistById = (req, res) => {
    const journalist = journalists.find(j => j.id === parseInt(req.params.id));
    if (!journalist) return res.status(404).json({ error: "Journalist not found" });
    res.json(journalist);
};

export const createJournalist = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }
    const newJournalist = { id: journalists.length + 1, name, email };
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
};

export const updateJournalist = (req, res) => {
    const journalist = journalists.find(j => j.id === parseInt(req.params.id));
    if (!journalist) return res.status(404).json({ error: "Journalist not found" });

    const { name, email } = req.body;
    if (name) journalist.name = name;
    if (email) journalist.email = email;

    res.json(journalist);
};

export const deleteJournalist = (req, res) => {
    const index = journalists.findIndex(j => j.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Journalist not found" });

    journalists.splice(index, 1);
    res.status(204).send();
};

export const getArticlesByJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: "Journalist not found" });

    const articlesByJournalist = articles.filter(a => a.journalistId === journalistId);
    res.json(articlesByJournalist);
};

export const getAllCategories = (req, res) => {
    res.json(categories);
};

export const getCategoryById = (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
};

export const createCategory = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }
    const newCategory = { id: categories.length + 1, name };
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

export const updateCategory = (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).json({ error: "Category not found" });

    const { name } = req.body;
    if (name) category.name = name;

    res.json(category);
};

export const deleteCategory = (req, res) => {
    const index = categories.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Category not found" });

    categories.splice(index, 1);
    res.status(204).send();
};

export const getArticlesByCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(c => c.id === categoryId);
    if (!category) return res.status(404).json({ error: "Category not found" });

    const articlesByCategory = articles.filter(a => a.categoryId === categoryId);
    res.json(articlesByCategory);
};
import express from 'express'
import {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    getAllJournalists,
    getJournalistById,
    createJournalist,
    updateJournalist,
    deleteJournalist,
    getArticlesByJournalist,
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getArticlesByCategory
 } from "../controllers/controller.js";
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

const router = express.Router();

// Articles routes
router.get('/articles', getAllArticles); // GET /articles
router.get('/articles/:id', getArticleById); // GET /articles/:id
router.post('/articles', createArticle); // POST /articles
router.put('/articles/:id', updateArticle); // PUT /articles/:id
router.delete('/articles/:id', deleteArticle); // DELETE /articles/:id

// Journalists routes
router.get('/journalists', getAllJournalists); // GET /journalists
router.get('/journalists/:id', getJournalistById); // GET /journalists/:id
router.post('/journalists', createJournalist); // POST /journalists
router.put('/journalists/:id', updateJournalist); // PUT /journalists/:id
router.delete('/journalists/:id', deleteJournalist); // DELETE /journalists/:id
router.get('/journalists/:id/articles', getArticlesByJournalist); // GET /journalists/:id/articles

// Categories routes
router.get('/categories', getAllCategories); // GET /categories
router.get('/categories/:id', getCategoryById); // GET /categories/:id
router.post('/categories', createCategory); // POST /categories
router.put('/categories/:id', updateCategory); // PUT /categories/:id
router.delete('/categories/:id', deleteCategory); // DELETE /categories/:id
router.get('/categories/:id/articles', getArticlesByCategory); // GET /categories/:id/articles

export default router;
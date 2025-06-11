import express from 'express';
import router from './routes/route.js';

const app = express();

const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json(articles)
// });

app.use('/', router);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
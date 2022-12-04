import express from 'express';

const app = express();

app.use(express.json());

app.post('/courses', (req, response) => {
    const { name } = req.body;
    return response.json(name);
});

app.listen(3333, () => console.log('Server started 3333'));

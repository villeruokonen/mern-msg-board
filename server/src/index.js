const express = require('express');
const routes = require('./routes/routes');
const app = express();
const PORT = 4000;
const db = require('./db');
const cors = require('cors');

db.then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

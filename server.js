const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // Serve static files from 'public'

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));

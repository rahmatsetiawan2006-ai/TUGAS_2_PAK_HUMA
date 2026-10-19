const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const menuRoutes = require('./routes/menuRoutes');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', menuRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
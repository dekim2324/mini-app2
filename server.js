const express = require('express');
const app = express();

// Init middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to Photo Keeper Page!'})
});

// Define Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});
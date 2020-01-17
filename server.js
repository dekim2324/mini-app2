const express = require('express');
const app = express();
const connectDB = require('./config/mongo');

// Init middleware
app.use(express.json({ extended: false }));

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to Photo Keeper Page!'})
});

// Define Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});
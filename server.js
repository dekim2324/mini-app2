const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('success')
});

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});
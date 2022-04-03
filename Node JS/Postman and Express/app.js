const express = require('express');
const app = express();
const port = 80;
app.get('/', (req, res) => {
    res.send('This is my first express app with code with harry ');
});
app.get('/about', (req, res) => {
    res.send('This is my abput page app with code with harry ');
});
app.post('/about', (req, res) => {
    res.send('This is my abput page app using post with harry ');
});
app.put('/about', (req, res) => {
    res.send('This is my abput page app using put with harry ');
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
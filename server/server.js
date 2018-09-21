const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
var app = express();

app.use(express.static(publicPath));

var port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

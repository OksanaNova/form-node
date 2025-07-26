const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://oksana:VrIEzPYhTK9ti2DA@cluster0.fyb72nt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
})
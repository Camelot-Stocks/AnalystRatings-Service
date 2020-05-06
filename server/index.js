const express = require('express');
const app = express();
const port = 3005;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const nr = require('newrelic');
const controller =  require('./postgresDb/controller.js');

app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ratings/getData/:id', (req, res) => {
    var id = req.params.id;
    controller.Get.getReviews(id, res);
});
app.post('/ratings/addAnalyst', (req, res) => {
    controller.Post.postAnalyst(req, res);
})
app.post('/ratings/addReview', (req, res) => {
    controller.Post.postReview(req, res);
})
app.post('/ratings/addStock', (req, res) => {
    controller.Post.postStock(req, res);
})
// GET * FROM reviews where id=${id}; 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

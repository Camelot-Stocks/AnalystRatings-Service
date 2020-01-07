const PG = require('./model.js');

module.exports = {
  Get: {
    getReviews: (stockId, res) => {
      PG.getReviews((err, data) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(data);
        }
      }, stockId);
    }
  },
  Post: {
    postReview: (req, res) => {
      PG.addReview((err, data) => {
        if (err) {
          res.status(400).send(err);
        } else {
          console.log('posted');
        }
      }, req.body)
    },
    postAnalyst: (req, res) => {
      PG.addAnalyst((err, data) => {
        if (err) {
          res.status(400).send(err);
        } else {
          console.log('Posted analyst')
        }
      }, req.body)
    }
  } 
}

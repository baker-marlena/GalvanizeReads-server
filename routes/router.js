const express = require('express');
const router = express.Router();
const queries = require('../db/queries')
const validators = require('./validators')

router.get("/books", (req, res) => {
  queries.getAllBooks().then(books => {
    res.json(books)
  })
})

router.post("/newbook", validators.vaildBookSubmission, (req, res, next) => {
  console.log("Hit the route")
  queries.addBook(req.body)
    .then(results => {
      if(!results){
        res.send("Invalid Submission")
      }
      else{
        res.send(results)
      }
    })
})


module.exports = router;

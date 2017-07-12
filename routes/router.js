const express = require('express');
const router = express.Router();
const queries = require('../db/queries')
const validators = require('./validators')

router.get("/books", (req, res) => {
  queries.getAllBooks().then(books => {
    res.json(books)
  })
})

router.get("/book/:id", (req, res) => {
  queries.getBook(req.params.id).then(book => {
    res.json(book)
  })
})

router.post("/newbook", validators.vaildBookSubmission, (req, res, next) => {
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

router.delete("/delete/:id", (req, res) => {
  queries.deleteBook(req.params.id)
  .then(
    res.send("success")
  )
})

router.put("/editbook/:id", validators.vaildBookSubmission, (req, res, next) => {
  queries.updateBook(req.params.id, req.body)
  .then(
    res.send("success")
  )
})


module.exports = router;

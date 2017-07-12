const express = require("express");

function validURL(url) {
    let urlTest = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    return urlTest.test(url)
  }
function validString(string){
    return typeof string == "string" && string.trim() != "";
  }
function vaildBookSubmission(req, res, next) {
  console.log(req.body)
    if (validURL(req.body.cover_url) == false) {
      next(new Error("Invalid URL"))
    }
    if (validString(req.body.title) == false) {
      next(new Error ("Invalid Title"))
    }
    if (validString(req.body.genre) == false){
      next(new Error ("Invalid Genre"))
    }
    if (validString(req.body.description) == false) {
      next(new Error("Invalid Description"))
    }
    else {
      return next();
    }
  }

module.exports = {validURL, validString, vaildBookSubmission}

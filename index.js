#!/usr/bin/env node
/* eslint-disable no-console */

const express = require("express")
const app = express()

const port = process.env.PORT || 8080

app.route("/*").get(function (req, res) {
  res.send({message: process.env.MESSAGE || "No message"})
})

app.listen(port, function () {
  console.log(`Ready on ${port}!`)
})

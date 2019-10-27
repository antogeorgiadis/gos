const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const firebase = require("firebase")

module.exports = function({
  dashboardMiddleware,
  renderDashboard,
  membersRepoMiddleware
}) {
  const app = express()

  firebase.initializeApp({
    apiKey: "AIzaSyCLe_IYjlZdkUZCYBU1IsV0uxChPdcJwjE",
    authDomain: "greeks-on-stage.firebaseapp.com",
    projectId: "greeks-on-stage"
  })

  app.use(express.urlencoded())
  app.use(bodyParser.urlencoded())
  app.use(bodyParser.json())

  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, '/src/views/'))
  app.get('/admin', (req, res, next) => {
    res.render('admin-login', { error: req.query.error })
  })
  app.post('/login', (req, res, next)  => {
    firebase.auth()
    .signInWithEmailAndPassword(req.body.username, req.body.password)
    .then(() => {
      console.log(`user ${req.body.username} logged in fine!`)
      res.redirect('/dashboard')
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.log(`Error is ${errorMessage}`)
      res.redirect('/admin?error=true')
    })

  })
  app.get('/dashboard', dashboardMiddleware, renderDashboard)
  app.get('/get-members', membersRepoMiddleware)
  return app
}
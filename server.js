const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const firebase = require('firebase')
// const ReactDOMServer = require('react-dom-server')
// const React = require('react')

// const Hello = (props) => (
//   <React.Fragment>
//     <h1>Hello, {props.name}!</h1>
//   </React.Fragment>
// )
// module.exports =
// {
//   Hello: Hello
// }

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
  app.get('/ssr', (req, res) => {
    const name = 'Marvelous Wololo'

    // const component = ReactDOMServer.renderToString(<Hello name={name} />)

    const html = `
  <!doctype html>
    <html>
    <head>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
    </head>
    <body>
    <!--<div id="root">${component}</div>-->
    <!--<script src="/public/home.js"></script>-->
  </body>
  </html>`

    res.send(html)
  })

  return app
}
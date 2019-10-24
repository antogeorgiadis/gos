const express = require('express')

module.exports = function({
  dashboardMiddleware,
  renderDashboard
}) {
  const app = express()

  app.get('/dashboard', dashboardMiddleware, renderDashboard)

  return app
}
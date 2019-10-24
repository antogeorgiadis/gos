const express = require('express')

module.exports = function({
  dashboardMiddleware,
  renderDashboard,
  membersRepoMiddleware
}) {
  const app = express()

  app.get('/dashboard', dashboardMiddleware, renderDashboard)
  app.get('/get-members', membersRepoMiddleware)
  return app
}
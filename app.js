const createDashboardMiddleware = require('./src/middleware/dashboardViewModelBuilder')
const renderDashboard = require('./src/middleware/renderDashboard')
const membersClient = require('./src/ajax/fetchMembers')

const dashboardMiddleware = createDashboardMiddleware({ membersClient })
const membersRepoMiddleware = (req, res, next) => {
  res.send([
    { name: "Tony", email: "tony@tony.com" }
  ])
}
const app = require('./server')({
  dashboardMiddleware,
  renderDashboard,
  membersRepoMiddleware
})
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App is running in port ${port}...`)
})
const createDashboardMiddleware = require('./src/middleware/dashboardViewModelBuilder')
const renderDashboard = require('./src/middleware/renderDashboard')
const membersClient = require('./src/ajax/fetchMembers')
const firebase = require("firebase")

const dashboardMiddleware = createDashboardMiddleware({ membersClient })
const membersRepoMiddleware = (req, res, _next) => {
  const db = firebase.firestore()

  db.collection('members').get().then((response) => {
    response.forEach((member) => {
      const members = member.data().members
      res.send(members)
    })
  })
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
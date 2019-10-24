const createDashboardViewModelBuilder = ({ membersClient }) => {
  return (req, res, next) => {
    membersClient.fetch('http://localhost:3000').then(res => {
      req.members = res
      next()
    })
  }
}

module.exports = createDashboardViewModelBuilder
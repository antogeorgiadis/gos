const createDashboardViewModelBuilder = ({ membersClient }) => {
  return (req, res, next) => {
    req.members = membersClient.fetch()
    next()
  }
}

module.exports = createDashboardViewModelBuilder
const renderDashboard = (req, res) => {
  const members = req.members || []

  res.render('main', { members })
}

module.exports = renderDashboard
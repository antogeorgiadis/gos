const renderDashboard = (req, res, next) => {
  const users = req.members || []
  const userListHtml = users.map(user => `<li>Name: ${user.name} | Email: ${user.email}</li>`)
  const html = `<ul>${userListHtml}</ul>`

  res.render(html)
}

module.exports = renderDashboard
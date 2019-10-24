const renderDashboard = (req, res) => {
  const users = req.members || []
  const userListHtml = users.map(user =>
  `<li class="member-card">
    <div>Name: ${user.name}</div>
    <div>Email: ${user.email}</div>
  </li>`)
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="handheldfriendly" content="true">
    <meta name="mobileoptimized" content="320">
  </head>
  <body>
    <style>
      .member-card {
          color:red;
      }
    </style>
    <h2>Dashboard</h2>
    <ul style="list-style: none">${userListHtml}</ul>
  </body>
  </html>
`

  res.send(html)
}

module.exports = renderDashboard
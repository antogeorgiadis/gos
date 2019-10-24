const app = require('./server')()
app.listen(3000, () => {
  console.log('App is running in port 3000...')
})
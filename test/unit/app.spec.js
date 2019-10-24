const request = require('supertest')

describe('Server', () => {
  describe('Routing', () => {
    it('calls dashboardMiddleware when calling dashboard endpoint', (done) => {
      const dashboardMiddleware = (req, res, next) => {
        next()
      }
      const renderDashboard = (req, res, next) => {
        res.sendStatus(200)
      }
      const membersRepoMiddleware = (req, res, next) => {
        res.sendStatus(200)
      }
      const server = require('../../server')({ dashboardMiddleware, renderDashboard, membersRepoMiddleware })

      request(server)
      .get('/dashboard')
      .expect(200, done)
    })
  })
})
const { expect } = require('chai')

describe('DashboardMiddleware', () => {

  it('fetches members and passes them to the HTML renderer', (done) => {
    const createDashboardMiddlewareViewModelBuilder = require('../../src/middleware/dashboardViewModelBuilder')
    const member = { name: "Tony", email: "tony@tony.com" }
    const membersClient = {
      fetch: () => Promise.resolve([member])
    }

    const dashboardViewModelBuilder = createDashboardMiddlewareViewModelBuilder({
      membersClient
    })

    const req = {}
    dashboardViewModelBuilder(req, {}, () => {
      expect(req.members).to.eql([member])
      done()
    })
  })
})
const { expect } = require('chai')

describe('DashboardMiddleware', () => {

  it('fetches members and passes them to the HTML renderer', (done) => {
    const createDashboardMiddleware = require('../../src/middleware/dashboardViewModelBuilder')
    const member = { name: "Tony", email: "whatever" }
    const membersClient = {
      fetch: () => [member]
    }

    const middleware = createDashboardMiddleware({
      membersClient
    })

    const req = {}
    middleware(req, {}, () => {})

    expect(req.members).to.eql([member])
    done()
  })
})
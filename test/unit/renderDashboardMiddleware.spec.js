const sinon = require('sinon')
const { expect } = require('chai')

describe('RenderDashboardMiddleware', () => {
  it('renders dashboard list with members', (done) => {
    const renderDashboardMiddleware = require('../../src/middleware/renderDashboard')
    const member = { name: "Tony", email: "whatever" }

    const req = {
      members: [member]
    }
    const res = {
      render: sinon.spy()
    }

    renderDashboardMiddleware(req, res, () => {})

    expect(res.render.calledWith('<ul><li>Name: Tony | Email: whatever</li></ul>')).to.eql(true)
    done()
  })
})
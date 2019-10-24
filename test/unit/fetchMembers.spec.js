const membersClient = require('../../src/ajax/fetchMembers')
const { expect } = require('chai')
const nock = require('nock')

describe('fetchMembers', () => {
  it('fetches members', () => {
    const fakeUsers = [
      { name: "Tony", email: "tony@tony.com" }
    ]

    nock('http://localhost:3000')
    .get('/get-members')
    .reply(200, fakeUsers)

    membersClient.fetch('http://localhost:3000').then(res => {
      expect(res).to.eql(fakeUsers)
    })
  })
})
describe('Members Dashboard', () => {
  beforeEach(() => {})
  it('displays registered members', () => {
    cy.visit('http://localhost:3000/dashboard')
    expect(cy.get('ul#members li').length).to.eql(10)
  })
})
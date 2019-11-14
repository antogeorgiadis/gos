const Hello = require('../server').Hello

const React = require('react')
const ReactDOM = require('react-dom')

ReactDOM.hydrate(
  <Hello name={window.__INITIAL__DATA__.name} />,
  document.getElementById('root')
)
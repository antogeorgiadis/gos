const axios = require('axios')

const fetch = host => {
  const fetchUsersUrl = `${host}/get-members`
  return axios.get(fetchUsersUrl)
  .then(res => {
    return res.data || []
  })
}

module.exports = {
  fetch
}
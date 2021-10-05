const axios = require('axios');

function language_list() {
  const req = async () => {
    const response = await axios.get('https://glot.io/api/run')
    return response.data
  }
req()
}

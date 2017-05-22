import axios from 'axios'
export default {
  getText (params, cb, errorCb) {
    axios.get('/test.json').then((response) => {
      console.log(response.data.text)
      cb(response)
    }).catch((error) => {
      errorCb()
      alert(error)
    })
  }
}

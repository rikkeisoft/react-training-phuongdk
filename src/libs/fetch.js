import axios from 'axios'
import config from '../libs/config'

class App {
  static fetchMovies (keyword, params = null, page = 1) {
    const mode = params === 'i' ? params : 's'
    return new Promise((resolve, reject) => {
      axios.get(`https://www.omdbapi.com/?${mode}=${keyword}&page=${page}&apikey=${config.apiKey}`)
        .then(results => {
          if (results.data.Response === 'True') {
            resolve(results)
          } else {
            reject(results.data.Error)
          }
        })
        .catch(error => {
          console.log(error)
          reject(config.fetchError)
        })
    })
  }
}
export default App

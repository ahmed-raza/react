import axios from 'axios'

export default axios.create({
  baseURL: 'http://local.drupal9.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

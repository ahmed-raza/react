import axios from 'axios'

const KEY = 'AIzaSyDOX13CQQGZIKb5IcxlqFFCbWxY9Q0EVao'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
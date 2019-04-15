import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ef89f39a92e57e1982cce4db47ef004238a3c07c0a35c1489ce9571825158409',
  }
})
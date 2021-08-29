// authAxios.js
import axios from 'axios'

const customInstance = axios.create ({
  // baseURL : `http://localhost:3030/api/v3/auth/`, //local
  baseURL : 'https://api-admin.shafa.care/api/v3/auth/', //live
  // baseURL : 'https://api-admin-test.shafa.care/api/v3/auth/' //test

})
export default customInstance

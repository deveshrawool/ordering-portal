import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://elredtest.s3.amazonaws.com/reactAssignment/' ,
    headers: {},
  })
export default axiosInstance
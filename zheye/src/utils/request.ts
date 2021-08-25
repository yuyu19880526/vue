import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/d2dea199dfce65fa530cf19473df4566/zheye',
  timeout: 100000
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = (url:string, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const get = (url:string, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

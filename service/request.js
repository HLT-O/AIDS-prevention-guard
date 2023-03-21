const baseUrl = 'http://139.196.47.8:3000/api'
const request = (url = '', data= {}, type = 'GET') => {
  return new Promise((resolve, reject) => {
    const token = uni.getStorageSync('token')
    uni
      .request({
        method: type,
        url: baseUrl + url,
        data: data,
        header: {"authorization":`Bearer ${token}`},
        dataType: 'json'
      })
      .then((response) => {
        setTimeout(function () {
          uni.hideLoading()
        }, 200)
        let [error, res] = response
        resolve(res.data)
      })
      .catch((error) => {
        let [err, res] = error
        reject(err)
      })
  })
}
const requestStart = (url = '', data= {}, type = 'GET', header = {}) => {
  return new Promise((resolve, reject) => {
    uni
      .request({
        method: type,
        url: baseUrl + url,
        data: data,
        header: header,
        dataType: 'json'
      })
      .then((response) => {
        setTimeout(function () {
          uni.hideLoading()
        }, 200)
        let [error, res] = response
        resolve(res.data)
      })
      .catch((error) => {
        let [err, res] = error
        reject(err)
      })
  })
}
export {
  request,
  requestStart
}

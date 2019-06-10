require("es6-promise").polyfill();
require("isomorphic-fetch");

class HttpUtil {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))

    })
  }

  // post方式
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Request-Method': '*'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))

    })
  }

  // post方式
  postFile(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'multipart/form-data',
          'Access-Control-Request-Method': '*'
        },
        body: data
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))

    })
  }
}
export default new HttpUtil();//ES6导出
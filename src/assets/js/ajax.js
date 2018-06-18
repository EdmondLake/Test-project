export default (type = 'GET', url = '', data = {}, async = true) => {
  return new Promise((resolve, reject) => {
    type = type.toUpperCase()

    let requestObj
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest()
    } else {
      requestObj = new ActiveXObject
    }

    if (type === 'GET') {
      let dataStr = ''
      // object.keys()方法会返回一个由一个给定对象的自身可枚举属性组成的数组
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
      requestObj.open(type, url, async)
      requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      requestObj.send()
    } else if (type === 'POST') {
      requestObj.open(type, url, async)
      requestObj.setRequestHeader('Content-type', 'application/json')
    } else {
      reject('Error type')
    }

    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4 && requestObj.status === 200) {
        let obj = requestObj.response
        if (typeof obj !== 'object') {
          obj = JSON.parse(obj)
        }
        resolve(obj)
      } else {
        reject(requestObj)
      }
    }

  })
}

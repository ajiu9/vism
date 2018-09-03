import JSONP from 'jsonp'
import axios from 'axios'
import {Modal} from 'antd'

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
        JSONP(options.url, {
            param: 'callback'
        }, function (err, response) {
            if (response.status === 'success') {
                resolve(response);
            } else {
                reject(response.messsage);
            }
        })
    })
  }

  static ajax(options) {
    let loading
    loading = document.getElementById('ajaxLoading')
    if (options.data && options.data.showLoading !== false) {
        loading.style.display = 'block'
    }
    let baseUrl='https://www.easy-mock.com/mock/5b87b8017bf2e62ecd8955a8/mock.pai'
    return new Promise((resolve, reject) => {
        axios({
            url: options.url,
            method: 'get',
            baseURL: baseUrl,
            params: (options.data && options.data.params) || ''
        }).then((res) => {
            loading.style.display = ''
            if (res.status === 200) {
                let response = res.data
                if (response.code === 0) {
                    resolve(response)
                }
                else {
                    Modal.info({
                        title: '提示',
                        content: response.msg
                    })
                }
            } else {
                reject(res.data)
            }
        })
    })
  }
}
'use strict'
import axios from 'axios'
import qs from 'qs'
import Element from "element-ui";

 //响应的拦截器





function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户

  if (res.status === -404) {
     

    Element.Message({
      message: res.data.msg,
      type: 'error',
      showClose: true
    })
  }
  if (res.data && !res.data.success) {
   
    // Element.Message({
    //   message: res.data.msg,
    //   type: 'error',
    //   showClose: true
    // })
  }
  return res
}

export default {
  //请求地址,请求数据,是否需要菊花转
  post(url, data,hasLoading) {
    let needLoading = hasLoading == null || hasLoading == "" || hasLoading == undefined || hasLoading ? false : true ;
    if(needLoading){
      let loadingInstance;
      //post请求的拦截器
      axios.interceptors.request.use(config => {
        loadingInstance = Element.Loading.service({
          lock: true, 
          text: '正在请求数据',
          //spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0)'  
        });
        return config
      }, error => {
        return Promise.reject(error)
      });
     
      axios.interceptors.response.use(response => {
        loadingInstance.close();
        return response
      }, error => {
        return Promise.resolve(error.response)
      })
    }

    return axios({
      method: 'post',
      baseURL: 'http://www.digouyouzhennanchi.xyz/api',// http://localhost:5741/  http://www.digouyouzhennanchi.xyz/api  
      url,
      data: qs.stringify(data),
      timeout: 10000,
      // headers: {
      //   'X-Requested-With': 'XMLHttpRequest',
      //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      // }
    }).then(
      (response) => {
        return checkStatus(response)
      }
      ).then(
      (res) => {
        return checkCode(res)
      }
      )
  },
  get(url, params) {
    axios.interceptors.request.use(config => {
    
       return config
     }, error => {
       return Promise.reject(error)
     });

    return axios({
      method: 'get',
      baseURL: 'http://www.digouyouzhennanchi.xyz/api',//    
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      // headers: {
      //   'X-Requested-With': 'XMLHttpRequest'
      // }
    }).then(
      (response) => {
        return checkStatus(response)
      }
      ).then(
      (res) => {
        return checkCode(res)
      }
      )
  }
}
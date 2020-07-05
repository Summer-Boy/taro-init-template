import Taro from "@tarojs/taro";
import axios from "taro-axios";
import config from "@/config";
import { getUserOpenId, submitError } from "./operate";

function alertMessage(text) {
  Taro.showToast({
    title: text,
    icon: "none",
    duration: 1500
  });
}

const service = axios.create({
  baseURL: config.basePath,
  timeout: 5000
});

// request拦截器
service.interceptors.request.use(
  config => {
    service.$data = config;
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    //校验openId
    if (config.data.hasOwnProperty("openId")) {
      if (config.data.openId) {
        return config;
      } else {
        return getUserOpenId().then(openId => {
          config.data.openId = openId;
          return config;
        });
      }
    } else {
      return config;
    }
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.data.result == 1) {
      return response.data;
    } else {
      alertMessage(response.data.desc);
      return;
    }
  },
  error => {
    console.log(error);
    try {
      if (error.toString().indexOf("Network Error") !== -1) {
        alertMessage("网络请求超时");
        return;
      } else {
        const data = service.$data;
        console.log(data);
        //收集错误
        // openId: err.request.body.openId,
        // url: err.request.url,
        // message: JSON.stringify(errMessage)
        //return
        // submitError({
        //   openId: data.openId,
        //   url: url,
        //   message: JSON.stringify(errMessage)
        // });
        return;
      }
    } catch (e) {
      return Promise.reject(error);
    }
  }
);

export default service;

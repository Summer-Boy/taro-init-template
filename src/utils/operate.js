import store from "@/store";
import config from "@/config";

//获取openId
function getUserOpenId() {
  return new Promise(async (resolve, reject) => {
    wx.login({
      success: function(res) {
        wx.request({
          url: config.getOpenIdPath,
          method: "GET",
          data: {
            appId: config.appId,
            js_code: res.code
          },
          success: function(opt) {
            const { result, data } = opt.data;
            if (result == 1) {
              store.dispatch("setOpenId", data.openid);
              resolve(data.openid);
            }
          }
        });
      }
    });
  });
}

//上报错误
function submitError(data) {
  wx.request({
    url: config.api + "wisdom/common/error/message.do",
    method: "POST",
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
    data
  });
}

export { getUserOpenId, submitError };

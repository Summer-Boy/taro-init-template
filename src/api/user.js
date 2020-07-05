import request from '@/utils/request'

//校验登录
function checkLogin(data) {
  return request({
    url: 'wisdom/restaurant/check/login.do',
    method: 'post',
    data
  })
}

export { checkLogin };

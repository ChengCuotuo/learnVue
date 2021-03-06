import request from '@/utils/request';

/**
 * 获取验证码
 */
export function GetSms(data) {
    return request.request({
        method: "post",
        url: "/getSms/",
        data
        // data : data 左边的参数名称，右边是传递的内容，当两个相同的时候，可以只写1个， ES 6
    })
}

/**
 * 登录
 */
export function Login(data) {
    return request.request({
        method: "post",
        url: "/login/",
        data
    })
}


/**
 * 注册
 */
export function Register(data) {
    return request.request({
        method: "post",
        url: "/register/",
        data
    })
}
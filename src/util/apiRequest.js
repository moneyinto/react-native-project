import request from "./request";
import ToastContainer from "./toast";

const baseUrl = 'https://testweb.front.eweb.cn/';

export default async function ApiRequest(url, options, withToken = true, isShowLoading = false) {
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };
    const requestOptions = { ...options, headers };
    if (requestOptions.body !== undefined) {
        const body = requestOptions.body;
        requestOptions.body = JSON.stringify(body);
    }

    if (withToken) {
        requestOptions.headers.Authorization = global.token;
    }

    isShowLoading && global.loading.show();

    return request(baseUrl + url, requestOptions).then((result) => {
        
        isShowLoading && global.loading.hide();

        const { data, success } = result;
        let realSuccess = false;
        let msg = '';
        let resultCode;
        let resultData = {};
        if (success) {
            const { message } = data;
            const code = parseInt(`${data.code}`, 10);
            // 请求成功，并且服务器返回200才算是真正的成功
            if (code && code === 200) {
                realSuccess = true;
                resultCode = 200;
                resultData = data.data;
            } else {
                if (code && (code === 505 || code === 526)) {
                    // 505 是未登录  526 是被挤下登录
                    // logout();
                }
                msg = message;
                resultCode = code || 1; // 服务器返回错误
                if (code == 1000000) {
                    ToastContainer.info(msg);
                }
            }
        } else {
            resultCode = 0; // 网络请求发生错误
            /**
             * 提示网络错误
             */
            ToastContainer.info('网络异常')
            console.log(`api result error ${url}`, result);
        }
        const compiledResult = { code: resultCode, message: msg, success: realSuccess, data: resultData };
        return compiledResult;
    });
}
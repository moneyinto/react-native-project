import ApiRequest from "../util/apiRequest";

export async function login(data) {
    return ApiRequest(
        'app/user/login',
        {
            method: 'POST',
            body: data,
        }, false
    );
}
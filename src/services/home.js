import ApiRequest from "../util/apiRequest";

/**
 * 获取轮播图
 */
export async function getBanner(platform) {
    return ApiRequest(
        `common/advertise/banner?platform=${platform}`,
        {
            method: 'GET',
        }, false
    );
}

/**
 * 获取分类列表
 */
export async function getCategoryList(shopSn = '') {
    return ApiRequest(
        `member/category/list?shopSn=${shopSn}`,
        {
            method: 'GET',
        }, false
    );
}
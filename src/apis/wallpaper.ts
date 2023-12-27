const baseUrl: string = "/api/wallpaper/"

import request from '@/utils/http'

const getTodayUrl = async () => {
    return request({
        url: baseUrl + 'get-today-url',
        method: 'GET',
    })
}
export {
    getTodayUrl
}

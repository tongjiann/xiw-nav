const baseUrl: string = "/api/category/"

import request from '@/utils/http'

const listVo = async () => {
    return request({
        url: baseUrl + 'list-vo',
        method: 'GET',
    })
}
export {
    listVo
}

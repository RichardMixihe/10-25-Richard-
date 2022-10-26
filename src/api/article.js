// 这里放面试题相关的请求
// 比如获取面试题、获取某个面试题的详细信息、[取消]点赞、[取消]收藏

import request from '@/utils/request'

// 分页获取面试题列表
export const articleAPI = ({ current, sorter }) => {
  return request.get('/h5/interview/query', {
    params: {
      current: current,
      pageSize: 10,
      sorter: sorter
    }
  })
}

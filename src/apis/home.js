import httpInstance from "@/utils/http"

// 轮播图
export function getBannerAPI (params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

// 新鲜好物
export function getNewAPI () {
  return httpInstance({
    url:'home/new',
  })
}

// 人气推荐
export const getHotAPI = () => {
  return  httpInstance({
    url:'home/hot',
  })
}

// 产品列表
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}

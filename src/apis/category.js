import httpInstance from "@/utils/http"

// 获取分类列表数据
export const getTopCategoryAPI = (id) => {
  return httpInstance({
    url:'/category',
    params:{
      id
    }
  })
}

// 获取二级分类列表数据
export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}

// 获取商品列表
export const getSubCategoryAPI = (data) => {
  return httpInstance({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}

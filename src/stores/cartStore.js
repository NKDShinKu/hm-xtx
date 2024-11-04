import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCartStore = defineStore('cart', () => {
  // 1. 定义state - cartList
  const cartList = ref([])
  // 2. 定义action - addCart
  const addCart = (goods) => {
    // console.log('添加', goods)
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      // 找到了
      item.count = item.count + goods.count
    } else {
      // 没找到
      cartList.value.push(goods)
    }
  }

  // 删除购物车
  const delCart = (skuId) => {
    const idx = cartList.value.findIndex( item => skuId === item.skuId)
    cartList.value.splice(idx, 1)
  }

  // 计算总数与总价
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count  * c.price, 0))

  // 单选功能
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find(item => item.skuId === skuId )
    item.selected = selected
  }

  //是否全选
  const isAll = computed(() => cartList.value.every(item => item.selected))
  // 全选功能
  const allCheck = (selected) => {
    // 把cartList中的每一项的selected都设置为当前的全选框状态
    cartList.value.forEach(item => item.selected = selected)
  }

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck,
  }
}, {
  persist: true,
})

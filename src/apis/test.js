import httpInstance from "@/utils/http"

export function testa() {
  return httpInstance({
    url: 'home/category/head'
  })
}

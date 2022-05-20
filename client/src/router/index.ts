import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import CompleteSpriteView from "@/components/debug/tile/CompleteSpriteView.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/debug/tile/completespriteview",
    name: "CompleteSpriteView",
    component: CompleteSpriteView
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
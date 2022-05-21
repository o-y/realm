import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CompleteSpriteView from "@/components/debug/tile/CompleteSpriteView.vue";
import PhaserComponent from '@/components/game/PhaserComponent.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/debug/tile/completespriteview",
    name: "CompleteSpriteView",
    component: CompleteSpriteView
  },
  {
    path: "/",
    name: "PhaserC",
    component: PhaserComponent
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CompleteSpriteView from "@/components/debug/tile/CompleteSpriteView.vue";
import PhaserComponent from '@/components/game/PhaserComponent.vue';
import Auth from '@/components/auth/Auth.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "auth",
    component: Auth
  },
  // realms
  {
    path: "/realms/:realm",
    name: "PhaserC",
    component: PhaserComponent
  },
  // debug
  {
    path: "/debug/tile/completespriteview",
    name: "CompleteSpriteView",
    component: CompleteSpriteView
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
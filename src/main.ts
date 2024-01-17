import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { router } from './router'
import type { RouteRecordRaw } from "vue-router";
import { articles } from './data';

export const createApp = ViteSSG(App, { routes: router })

export async function includedRoutes(paths: string[], routes: RouteRecordRaw[]) {
    return routes.flatMap((route) => {
      return route.name === 'artykul'
        ? articles.map(x => `/artykul/${x.articleId}`)
        : route.path
    })
  }
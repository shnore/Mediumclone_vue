import { createRouter, createWebHistory } from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed.vue'
import YourFeed from '@/views/YourFeed.vue'
import TagFeed from '@/views/TagFeed.vue'
import RegisterView from "@/views/RegisterView.vue"
import LoginView from "@/views/LoginView.vue"
import Article from "@/views/Article.vue"
import CreateArticle from "@/views/CreateArticle.vue"
import EditArticle from "@/views/EditArticle.vue"
import Settings from "@/views/Settings.vue"
import userProfile from "@/views/userProfile.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'globalFeed',
      component: GlobalFeed
    },
    {
      path: '/feed',
      name: 'yourFeed',
      component: YourFeed
    },
    {
      path: '/tags/:slug',
      name: 'tag',
      component: TagFeed
    },
    {
      path: '/articles/new',
      name: 'createArticle',
      component: CreateArticle
    },
    {
      path: '/articles/:slug',
      name: 'article',
      component: Article
    },
    {
      path: '/articles/:slug/edit',
      name: 'editArticle',
      component: EditArticle
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/profiles/:slug',
      name: 'userProfile',
      component: userProfile
    },
    {
      path: '/profiles/:slug/favorites',
      name: 'userProfileFavorites',
      component: userProfile
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import VideoFeed from '../components/VideoFeed.vue'
import About from '../components/About.vue'
import Timeline from '../components/Timeline.vue'
import Contact from '../components/Contact.vue'
import MotivationPage from '../components/MotivationPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/video-feed'
  },
  {
    path: '/video-feed',
    name: 'VideoFeed',
    component: VideoFeed
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/motivation',
    name: 'Motivation',
    component: MotivationPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
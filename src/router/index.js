import Vue from 'vue'
import Router from 'vue-router'
import Home from './../page/home/home'
import Video from './../page/video/video'
import Broadcast from './../page/broadcast/broadcast'
import Group from './../page/group/group'
import Mine from './../page/mine/mine'

import Movie from "./../components/video_child/movie"
import Book from "./../components/video_child/book"
import TV from "./../components/video_child/tv"
import Music from "./../components/video_child/music"
import City from "./../components/video_child/city"



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/video',
      name: 'Video',
      component: Video,
      children:[
        {
          path: '/',
          name: 'movie',
          redirect: 'movie',
        },
        {
          path: 'movie',
          name: 'Movie',
          component: Movie,
        },
        {
          path: 'book',
          name: 'Book',
          component: Book,
        },
        {
          path: 'tv',
          name: 'TV',
          component: TV,
        },
        {
          path: 'music',
          name: 'Music',
          component: Music,
        },
        {
          path: 'city',
          name: 'City',
          component: City,
        }
      ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast ',
      component: Broadcast 
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
  ]
})

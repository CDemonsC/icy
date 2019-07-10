import Vue from 'vue'
import Router from 'vue-router'
import Style from '@/views/style'
import Icon from '@/views/icon'
import Shop from '@/views/shop'
import Activity from '@/views/activity'
import Login from '@/views/login'
import Search from '@/views/search'
import Center from '@/views/center'
// import Detail from '@/views/detail'
import DesignerList from '@/views/designer_list'

import Banner from '@/views/style/banner'
import Designer from '@/views/style/designer'
import Nav from '@/views/style/nav'
import Shoplist from '@/views/style/shoplist'

import Fashion from '@/views/icon/fashion'
import Iconbar from '@/views/icon/iconbar'
import Newest from '@/views/icon/newest'
import Star from '@/views/icon/star'

import ShopTotal from '@/views/shop/ShopTotal'
import ShopSale from '@/views/shop/ShopSale'
import ShopNew from '@/views/shop/ShopNew'
import ShopPrice from '@/views/shop/ShopPrice'

import Detail from '@/views/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/style',
      component: Style,
      children: [
        {
          path: 'banner',
          component: Banner
        },
        {
          path: 'designer',
          component: Designer
        },
        {
          path: 'nav',
          component: Nav
        },
        {
          path: 'shoplist',
          component: Shoplist
        }
      ]
    },

    {
      path: '/icon',
      component: Icon,
      children: [
        {
          path: 'fashion',
          component: Fashion
        },
        {
          path: 'iconbar',
          component: Iconbar
        },
        {
          path: 'newest',
          component: Newest
        },
        {
          path: 'star',
          component: Star
        },
        {
          path: '/icon',
          redirect: '/icon/newest'
        }
      ]
    },

    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: 'ShopTotal',
          component: ShopTotal
        },
        {
          path: 'ShopSale',
          component: ShopSale
        },
        {
          path: 'ShopNew',
          component: ShopNew
        },
        {
          path: 'ShopPrice',
          component: ShopPrice
        },
        {
          path: '',
          redirect: '/shop/ShopTotal'
        }
      ]
    },

    {
      path: '/center',
      component: Center
    },

    {
      path: '/login',
      component: Login
    },

    {
      path: '/search',
      component: Search
    },
    // {
    //   path: '/detail/:id',
    //   component: Detail
    // },
    {
      path: '/activity',
      component: Activity
    },

    {
      path: '/designer_list',
      component: DesignerList
    },

    {
      path: '',
      redirect: '/style'
    },
    {
      path: '/detail/:id',
      component: Detail
    }

  ]
})

import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },
      // Home页面
      {
        path: 'Home',
        name: 'Home',
        meta: {
          title: 'HomeList',
          auth: true,
          operations: ['add'] // meta中的operations判断权限比如add
        },
        component: _import('page/Home')
      },
      {
        path: 'VideoStories',
        name: 'VideoStories',
        meta: {
          title: 'Video Stories List',
          auth: true
        },
        component: _import('page/Video Stories')
      },
      {
        path: 'Offers',
        name: 'Offers',
        meta: {
          title: 'OffersList',
          auth: true
        },
        component: _import('page/Offers')
      },
      {
        path: 'SuccessStories',
        name: 'SuccessStories',
        meta: {
          title: 'Success Stories List',
          auth: true
        },
        component: _import('page/Success Stories')
      },
      {
        path: 'Services',
        name: 'Services',
        meta: {
          title: 'ServicesList',
          auth: true
        },
        component: _import('page/Services')
      },
      {
        path: 'About',
        name: 'About',
        meta: {
          title: 'AboutList',
          auth: true
        },
        component: _import('page/About')
      },
      {
        path: 'Blog',
        name: 'Blog',
        meta: {
          title: 'BlogList',
          auth: true
        },
        component: _import('page/Blog')
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  },
  // Home的子路由
  {
    path: '/Home',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'Home1',
        name: 'Home1',
        meta: {
          title: 'Home1',
          auth: true
        },
        component: _import('page/Home/Home1')
      },
      {
        path: 'Home2',
        name: 'Home2',
        meta: {
          title: 'Home2',
          auth: true
        },
        component: _import('page/Home/Home2')
      }
    ]
  },
  // Video Stories路由
  {
    path: '/VideoStories',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'Stories1',
        name: 'Stories1',
        meta: {
          title: 'VideoStories1',
          auth: true
        },
        component: _import('page/Video Stories/Stories1')
      }
    ]
  },
  // Offers路由
  {
    path: '/Offers',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'Offers1',
        name: 'Offers1',
        meta: {
          title: 'OffersDetail-15&16',
          auth: true
        },
        component: _import('page/Offers/Offers1')
      },
      {
        path: 'Offers2',
        name: 'Offers2',
        meta: {
          title: 'OffersDetail-16&17',
          auth: true
        },
        component: _import('page/Offers/Offers2')
      },
      {
        path: 'Offers3',
        name: 'Offers3',
        meta: {
          title: 'OffersDetail-17&18',
          auth: true
        },
        component: _import('page/Offers/Offers3')
      },
      {
        path: 'Offers4',
        name: 'Offers4',
        meta: {
          title: 'OffersDetail-18&19',
          auth: true
        },
        component: _import('page/Offers/Offers4')
      },
      {
        path: 'Offers5',
        name: 'Offers5',
        meta: {
          title: 'OffersDetail-19&20',
          auth: true
        },
        component: _import('page/Offers/Offers5')
      }
    ]
  },
  // SuccessStories路由
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'Stories1',
        name: 'Stories1',
        meta: {
          title: 'Stories1',
          auth: true
        },
        component: _import('page/Success Stories/Stories1')
      },
      {
        path: 'Stories2',
        name: 'Stories2',
        meta: {
          title: 'Stories2',
          auth: true
        },
        component: _import('page/Success Stories/Stories2')
      },
      {
        path: 'Stories3',
        name: 'Stories3',
        meta: {
          title: 'Stories3',
          auth: true
        },
        component: _import('page/Success Stories/Stories3')
      },
      {
        path: 'Stories4',
        name: 'Stories4',
        meta: {
          title: 'Stories4',
          auth: true
        },
        component: _import('page/Success Stories/Stories4')
      },
      {
        path: 'Stories5',
        name: 'Stories5',
        meta: {
          title: 'Stories5',
          auth: true
        },
        component: _import('page/Success Stories/Stories5')
      },
      {
        path: 'Stories6',
        name: 'Stories6',
        meta: {
          title: 'Stories6',
          auth: true
        },
        component: _import('page/Success Stories/Stories6')
      },
      {
        path: 'Stories7',
        name: 'Stories7',
        meta: {
          title: 'Stories7',
          auth: true
        },
        component: _import('page/Success Stories/Stories7')
      },
      {
        path: 'Stories8',
        name: 'Stories8',
        meta: {
          title: 'Stories8',
          auth: true
        },
        component: _import('page/Success Stories/Stories8')
      },
      {
        path: 'Stories9',
        name: 'Stories9',
        meta: {
          title: 'Stories9',
          auth: true
        },
        component: _import('page/Success Stories/Stories9')
      },
      {
        path: 'Stories10',
        name: 'Stories10',
        meta: {
          title: 'Stories10',
          auth: true
        },
        component: _import('page/Success Stories/Stories10')
      },
      {
        path: 'Stories11',
        name: 'Stories11',
        meta: {
          title: 'Stories11',
          auth: true
        },
        component: _import('page/Success Stories/Stories11')
      }
    ]
  },
  // Services路由
  {
    path: '/Services',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'Services1',
        name: 'Services1',
        meta: {
          title: 'Services1',
          auth: true
        },
        component: _import('page/Services/Services1')
      },
      {
        path: 'Services2',
        name: 'Services2',
        meta: {
          title: 'Services2',
          auth: true
        },
        component: _import('page/Services/Services2')
      },
      {
        path: 'Services3',
        name: 'Services3',
        meta: {
          title: 'Services3',
          auth: true
        },
        component: _import('page/Services/Services3')
      },
      {
        path: 'Services4',
        name: 'Services4',
        meta: {
          title: 'Services4',
          auth: true
        },
        component: _import('page/Services/Services4')
      },
      {
        path: 'Services5',
        name: 'Services5',
        meta: {
          title: 'Services5',
          auth: true
        },
        component: _import('page/Services/Services5')
      }
    ]
  },
  // About路由
  {
    path: '/About',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'About1',
        name: 'About1',
        meta: {
          title: 'About1',
          auth: true
        },
        component: _import('page/About/About1')
      },
      {
        path: 'About2',
        name: 'About2',
        meta: {
          title: 'About2',
          auth: true
        },
        component: _import('page/About/About2')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]

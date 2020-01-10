import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/inquiry',
    name: 'patient',
    meta: { title: '在线问诊', icon: 'example' },
    children: [
      {
        path: 'inquiry',
        name: 'Inquiry',
        component: () => import('@/views/inquiry/index'),
        meta: { title: '候诊', icon: 'eye-open' }
      },
      {
        path: 'index',
        name: 'Inquired',
        component: () => import('@/views/inquired/index'),
        meta: { title: '已诊', icon: 'eye' }
      }
    ]
  },
  {
    path: '/inquiry',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Inquiry',
        component: () => import('@/views/inquiry/index'),
        meta: { title: '在线问诊', icon: 'form' }
      }
    ],
    hidden: true
  },
  {
    path: '/patient',
    component: Layout,
    redirect: '/patient/patient',
    name: 'patient',
    meta: { title: '我的患者', icon: 'user' },
    children: [
      {
        path: 'patient',
        name: 'patient',
        component: () => import('@/views/patient/patient'),
        meta: { title: '我的患者', icon: 'user' }
      },
      {
        path: 'index',
        name: 'details',
        component: () => import('@/views/patient/details/index'),
        meta: { title: '患者详情', icon: 'table' }
      }
    ]
  },
  {
    path: '/MyInformation',
    component: Layout,
    redirect: '/MyInformation/Integral',
    name: 'MyInformation',
    meta: { title: '我的信息', icon: 'form' },
    children: [
      {
        path: '/Integral',
        name: '我的积分',
        component: () => import('@/views/MyInformation/Integral/index'),
        meta: { title: '我的积分', icon: 'table' }
      }
    ]
  },

  {
    path: '/patientInfo',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'PatientInfo',
        component: () => import('@/views/patientInfo/index'),
        meta: { title: '病情信息', icon: 'form' }
      }
    ],
    hidden: true
  },
  {
    path: '/personData',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'PersonData',
        component: () => import('@/views/personData/index'),
        meta: { title: '个人资料', icon: 'form' }
      }
    ],
    hidden: true
  },

  {
    path: '/resultInfo',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'ResultInfo',
        component: () => import('@/views/resultInfo/index'),
        meta: { title: '诊断结果', icon: 'form' }
      }
    ],
    hidden: true
  },

  {
    path: '/diagnose',
    component: Layout,
    children: [
      {
        path: 'fill',
        name: 'FillDiagnose',
        component: () => import('@/views/diagnose/fill'),
        meta: { title: '填写诊断', icon: 'form' }
      }
    ],
    hidden: true
  },
  {
    path: '/doctorsadviceadd',
    component: Layout,
    children: [
      {
        path: 'drugadd',
        name: 'drugadd',
        component: () => import('@/views/doctorsadvice/drugadd'),
        meta: { title: '药品添加', icon: 'form' }
      }
    ],
    hidden: true
  },

  {
    path: '/doctorsadvice',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Doctorsadvice',
        component: () => import('@/views/doctorsadvice/index'),
        meta: { title: '药物医嘱', icon: 'form' }
      }
    ],
    hidden: true
  },

  {
    path: '/PurchaseContract',
    component: Layout,
    redirect: '/conpany contract/purchase contract',
    name: 'MyInformation',
    children: [
      {
        path: '/purchase contract',
        name: 'purchase contract',
        component: () => import('@/views/conpany contract/purchase contract'),
        meta: { title: '合同样式', icon: 'table' }
      }
    ]
  },

  {
    path: '/inquirydetail',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Inquirydetail',
        component: () => import('@/views/inquirydetail/index'),
        meta: { title: '问诊详情', icon: 'form' }
      }
    ],
    hidden: true
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order',
    children: [{
      path: 'index',
      name: '我的订单',
      component: () => import('@/views/order/index'),
      meta: { title: '我的订单', icon: 'tree' }
    }]
  },

  {
    path: '/orderInfo',
    component: Layout,
    redirect: '/orderInfo',
    children: [{
      path: 'info',
      name: 'OrderInfo',
      component: () => import('@/views/order/info'),
      meta: { title: '订单详情', icon: 'dashboard' }
    }],
    hidden: true
  },
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'http://localhost:8080/',
  //       meta: { title: '开始问诊', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

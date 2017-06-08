import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import seller from '@/components/seller/Seller'
import sellerdetail from '@/components/seller/SellerDetail'
import sellerevaluate from '@/components/seller/SellerEvaluate'
import userPage from '@/components/user/userPage'
import ProductInfo from '@/components/product/ProductInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
     {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/sellerdetail',
      name: 'sellerdetail',
      component: sellerdetail
    },
    {
      path: '/sellerevaluate',
      name: 'sellerevaluate',
      component: sellerevaluate
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: userPage
    },
    {
      path: '/product',
      name: 'ProductInfo',
      component: ProductInfo
    }
  ]
})

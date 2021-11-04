import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/Test.vue'
import LoginPage from '../components/pages/LoginPage.vue';
import RegisterPage from '../components/pages/RegisterPage.vue';
import MessagePage from '../components/pages/MessagePage.vue';
import AppPages from '../components/app/Index.vue';
import ContactPage from "../components/app/pages/Contacts.vue";
import CampaignsPage from "../components/app/pages/Campaigns.vue";
import TeamsPage from "../components/app/pages/Teams.vue";
import TargetingPage from "../components/app/pages/Targeting.vue";

// import UserDetails from '../components/forms/register/UserDetailsStepForm.vue';
// import UserGoals from '../components/forms/register/UserGoalsStepForm.vue';
// import BusinessInfo from '../components/forms/register/BusinessInfoStepForm.vue';
// import DefaultEmailId from '../components/forms/register/DefaultEmailIdStepForm.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Test',
    component: Test
  },
  {
    path: '/login',
    name: 'pages.login',
    component: LoginPage
  },
  {
    path: '/app',
    component: AppPages,
    children : [
      {
        path : '',
        name : 'app.dashboard',
        redirect: 'dashboard', 
        children: [
          {
            path: 'dashboard',
            name: 'app.dashboard.overview'
          },
          {
            path: 'dashboard',
            name: 'app.dashboard.activities'
          },
        ],
      }, 
      {
        path: 'contacts',
        name: 'app.contacts',
        component: ContactPage
      },
      {
        path: 'teams',
        name: 'app.teams',
        component: TeamsPage, 
      }, 
      {
        path: 'campaign',
        name: 'app.campaign',
        component: CampaignsPage, 
      },
      {
        path: 'targeting',
        name: 'app.targeting',
        component: TargetingPage, 
      }

     
     
    ]
  },
  {
    path: '/register',
    name: 'pages.register',
    component: RegisterPage,
  },
  {
    path: '/complete',
    name: 'pages.complete',
    component: MessagePage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

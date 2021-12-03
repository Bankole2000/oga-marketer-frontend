import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/Test.vue'
import LoginPage from '../components/pages/LoginPage.vue';
import RegisterPage from '../components/pages/RegisterPage.vue';
import MessagePage from '../components/pages/MessagePage.vue';
import AppPages from '../components/app/Index.vue';
import DashbaordPage from "../components/app/pages/Dashboard.vue";
import ContactPage from "../components/app/pages/Contacts.vue";
import CampaignsPage from "../components/app/pages/Campaigns.vue";
import TeamsPage from "../components/app/pages/Teams.vue";
import TargetingPage from "../components/app/pages/Targeting.vue";
import ProfilePage from '../components/app/pages/Profile.vue';
import SettingsPage from '../components/app/pages/Settings.vue';
import Targeting from '../components/app/features/Targeting/Targeting.vue';
import TargetingDashboard from '../components/app/features/Targeting/Dashboard.vue';
import NewTargetPage from '../components/app/features/Targeting/NewTarget/Index.vue';
import TargetingRules from '../components/app/features/Targeting/TargetingRules.vue';
import TrackingEvents from '../components/app/features/Targeting/TrackingEvents.vue';
import TrackingGoals from '../components/app/features/Targeting/TrackingGoals.vue';
import MyContacts from '../components/app/features/Contacts/MyContacts.vue';
import ContactsList from '../components/app/features/Contacts/ContactsList.vue';
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
    children: [
      {
        path: '',
        name: 'app.dashboard',
        redirect: 'dashboard',
        children: [

          {
            path: 'dashboard/activities',
            name: 'app.dashboard.activities'
          },
        ],
      },
      {
        path: 'dashboard',
        name: 'app.dashboard.overview',
        component: DashbaordPage
      },
      {
        path: 'contacts',
        component: ContactPage,
        children: [
          {
            path: '',
            name: 'app.contacts',
            redirect: 'my-contacts'
          },
          {
            path: 'my-contacts',
            name: 'app.contacts.my-contacts',
            component: MyContacts
          },
          {
            path: 'lists',
            name: 'app.contacts.lists',
            component: ContactsList
          }
        ]
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
        children: [
          {
            path: 'new',
            name: 'app.campaign.new',
          },
          {
            path: 'select-list',
            name: 'app.campaign.select-list',
          },
          {
            path: 'email-setup',
            name: 'app.campaign.email-setup'
          },
          {
            path: 'schedule',
            name: 'app.campaign.schedule'
          },
          {
            path: 'automation',
            name: 'app.campaign.automation'
          }
        ]
      },
      {
        path: 'targeting',
        component: TargetingPage,
        children: [
          {
            path: '',
            name: 'app.targeting',
            redirect: 'events'
          },
          {
            path: 'targeting',
            component: Targeting,
            children: [
              {
                path: '',
                name: 'app.targeting.targeting',
                component: TargetingDashboard
              },
              {
                path: 'new',
                name: 'app.targeting.targeting.new',
                component: NewTargetPage
              }
            ]
          },
          {
            path: 'events',
            name: 'app.targeting.events',
            component: TrackingEvents
          },
          {
            path: 'goals',
            name: 'app.targeting.goals',
            component: TrackingGoals
          },
          {
            path: 'rules',
            name: 'app.targeting.rules',
            component: TargetingRules
          }
        ]
      },
      {
        path: 'profile',
        name: 'app.profile',
        component: ProfilePage,
      },
      {
        path: 'settings',
        name: 'app.settings',
        component: SettingsPage,
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

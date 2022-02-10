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
import EmailTemplates from "../components/app/features/Campaigns/EmailTemplates.vue";
import TeamsPage from "../components/app/pages/Teams.vue";
import TargetingPage from "../components/app/pages/Targeting.vue";
import ProfilePage from '../components/app/pages/Profile.vue';
import SettingsPage from '../components/app/pages/Settings.vue';
import StartupAssistantPage from '../components/app/pages/StartupAssistant.vue';
import Targeting from '../components/app/features/Targeting/Targeting.vue';
import TargetingDashboard from '../components/app/features/Targeting/Dashboard.vue';
import StartupAssistant from '../components/app/features/Assistant/Index.vue';
import NewTargetPage from '../components/app/features/Targeting/NewTarget/Index.vue';
import TargetingRules from '../components/app/features/Targeting/TargetingRules.vue';
import TrackingEvents from '../components/app/features/Targeting/TrackingEvents.vue';
import TrackingGoals from '../components/app/features/Targeting/TrackingGoals.vue';
import MyContacts from '../components/app/features/Contacts/MyContacts.vue';
import ContactsList from '../components/app/features/Contacts/ContactsList.vue';
import ContactDetails from '../components/app/features/Contacts/ContactDetails/Index.vue';
import Segments from "../components/app/features/Contacts/Segments.vue";
import MyCampaigns from '../components/app/features/Campaigns/MyCampaigns.vue';
import NewCampaign from '../components/app/features/Campaigns/NewCampaign/Index.vue';
import CodeInstallationSettings from '../components/app/features/Settings/CodeInstallation.vue';
import NotificationSettings from '../components/app/features/Settings/Notifications.vue';
import MyProfile from '../components/app/features/Profile/MyProfile.vue';
import AccountCards from '../components/app/features/Profile/AccountCards.vue';
import BillingHistory from '../components/app/features/Profile/BillingHistory.vue'
// import UserDetails from '../components/forms/register/UserDetailsStepForm.vue';
// import UserGoals from '../components/forms/register/UserGoalsStepForm.vue';
// import BusinessInfo from '../components/forms/register/BusinessInfoStepForm.vue';
// import DefaultEmailId from '../components/forms/register/DefaultEmailIdStepForm.vue';
import CustomComponent from '../components/TestComponents/CustomComponent.vue';
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
            path: 'contact-details',
            name: 'app.contacts.contact-details',
            component: ContactDetails,
          },
          {
            path: 'lists',
            name: 'app.contacts.lists',
            component: ContactsList
          },
          {
            path: 'segments',
            name: 'app.contacts.segments',
            component: Segments
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
            path: '',
            name: 'app.campaigns',
            redirect: 'my-campaigns'
          },
          {
            path: 'my-campaigns',
            name: 'app.campaigns.my-campaigns',
            component: MyCampaigns
          },
          {
            path: 'email-templates',
            name: "app.campaigns.email-templates",
            component: EmailTemplates
          },
          {
            path: 'new',
            name: 'app.campaigns.new',
            component: NewCampaign
          },
          {
            path: 'select-list',
            name: 'app.campaigns.select-list',
          },
          {
            path: 'email-setup',
            name: 'app.campaigns.email-setup'
          },
          {
            path: 'schedule',
            name: 'app.campaigns.schedule'
          },
          {
            path: 'automation',
            name: 'app.campaigns.automation'
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
            redirect: 'targeting'
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
        component: ProfilePage,
        children: [
          {
            path: '',
            name: "app.profile",
            redirect: 'my-profile'
          }, 
          {
            path: "my-profile",
            name: 'app.profile.my-profile',
            component: MyProfile,
          },
          {
            path: 'cards',
            name: "app.profile.cards",
            component: AccountCards
          },
          {
            path: 'billings',
            name: 'app.profile.billing',
            component: BillingHistory
          }
        ]
      },
      {
        path: 'settings',
        component: SettingsPage,
        children: [
          {
            path: '',
            name: "app.settings",
            redirect: 'code-install'
          },
          {
            path: "code-install",
            name: "app.settings.codeInstallation",
            component: CodeInstallationSettings
          },
          {
            path: "notifications",
            name: "app.settings.notifications",
            component: NotificationSettings
          }
        ]
      },
      {
        path: "assistant",
        component: StartupAssistantPage,
        children: [
          {
            path: '',
            name: 'app.assistant',
            component: StartupAssistant
          }
        ]
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
  },
  {
    path: '/test',
    name: 'test',
    component: CustomComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import user from './user.vue'
import userAccount from './account/account.vue'
import userProfile from './profile/profile.vue'
import userNotifications from './notification/notifications.vue'
import userResources from './resource/resources.vue'
import userSettings from './settings/settings.vue'
import userTransactions from './transaction/transactions.vue'

export default {
  name: 'user',
  path: '/user',
  meta: {
    title: '用户'
  },
  component: user,
  children: [
    {path: '/user', redirect: '/user/resources' },
    { path: '/user/resources', component: userResources},
    { path: '/user/transactions', component: userTransactions},
    { path: '/user/account', component: userAccount},
    { path: '/user/notifications', component: userNotifications},
    { path: '/user/settings', component: userSettings},
    { path: '/user/profile', component: userProfile}
  ],

}

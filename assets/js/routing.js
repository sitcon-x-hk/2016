export default function (router) {
  router.map({
    '/': {
      component: require('./pages/home.vue')
    },
    'intro': {
      component: require('./pages/intro.vue')
    },
    'coc': {
      component: require('./pages/coc.vue')
    },
    'sponsor': {
      component: require('./pages/sponsor.vue')
    },
    'cfp': {
      component: require('./pages/cfp.vue')
    },
    'venue': {
      component: require('./pages/venue.vue')
    }
  })
}
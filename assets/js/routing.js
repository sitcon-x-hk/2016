export default function (router) {
  router.map({
    '/': {
      component: require('./pages/home.vue')
    },
    'coc': {
      component: require('./pages/coc.vue')
    },
    'cfp': {
      component: require('./pages/cfp.vue')
    },
    'venue': {
      component: require('./pages/venue.vue')
    },
    'organizers': {
      component: require('./pages/organizer.vue')
    },
    'timetable': {
      component: require('./pages/timetable.vue')
    },
    'topic/:topic': {
      name: 'topic',
      component: require('./pages/topic.vue')
    }
  })
}
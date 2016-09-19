'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import routing from './routing';
import Logo from './Logo.vue';

Vue.component('logo', Logo);
Vue.use(VueRouter);

const router = new VueRouter({
  saveScrollPosition: true
});

routing(router);

router.start({}, '#app');

$(Array.prototype.slice.call(document.getElementsByClassName('button-collapse'))).sideNav();
const side = document.getElementById('side-nav');
$(side).delegate('li a', 'click', function () {
  setTimeout(function () {
    $(side).sideNav('hide');
  }, 1000);
});

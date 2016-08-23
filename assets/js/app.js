'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import routing from './routing';
import Logo from './Logo';

Vue.component('logo', Logo);
Vue.use(VueRouter);

const router = new VueRouter({
  saveScrollPosition: true
});

routing(router);

router.start({}, '#app');

$('html').niceScroll();
$(document.getElementsByClassName('button-collapse')).sideNav();
const side = document.getElementById('side-nav');
$(side).delegate('li a', 'click', function () {
  setTimeout(function () {
    $(side).sideNav('hide');
  }, 1000);
});

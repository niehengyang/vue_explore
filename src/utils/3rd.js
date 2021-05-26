/**
 *
 * 导入Vue 及 Vue Router
 *
 */
import Vue from 'vue';
import Cookies from 'js-cookie';

/** 引入vue-router**/
import baseVueRouter from 'vue-router';
Vue.use(baseVueRouter);

/**
 *
 * 导入ElementUI
 *
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {
    size: Cookies.get('size') || 'medium' // set element-ui default size
});

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import '@babel/polyfill';
import Vue from 'vue';
// third party
import VModal from 'vue-js-modal';
import 'vue-notifyjs/themes/default.css';
import Notify from 'vue-notifyjs';
import VuetifyConfirm from 'vuetify-confirm';
import VeeValidate from 'vee-validate';


// plugins
import shared from '@/shared';
import '@/plugins/vuetify';
import i18n from './i18n';

// internal
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


import VueHtmlToPaper from 'vue-html-to-paper';

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
    "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css"
  ]
}

Vue.use(VueHtmlToPaper, options);




export const eventBus = new Vue();


Vue.use(VModal, {
  dynamic: true
});

Vue.use(VeeValidate);
Vue.use(Notify, {
  horizontalAlign: 'center',
  verticalAlign: 'top',
});
Vue.use(VuetifyConfirm);
Vue.use(shared);

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
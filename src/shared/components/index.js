import FormErrorMessages from './FormErrorMessages.vue';
import InternalErrorAlert from './InternalErrorAlert.vue';
import NetworkErrorAlert from './NetworkErrorAlert.vue';

export default {
  install(Vue) {
    Vue.component('form-error-messages', FormErrorMessages);
  },
};

export {
  NetworkErrorAlert,
  InternalErrorAlert
};
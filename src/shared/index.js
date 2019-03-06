import components from './components';
import filters from './filters';

export default {
  install(Vue) {
    Vue.use(components);
    Vue.use(filters);
  },
};

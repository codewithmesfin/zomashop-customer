import DateFilter from "./date-formating.filter";

export default {
  install(Vue) {
    Vue.filter("date", DateFilter);
  }
};

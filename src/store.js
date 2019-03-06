/* eslint no-param-reassign:0 */

import Vue from 'vue';
import Vuex from 'vuex';
import theme from '@/themes/theme.store';
import i18n from './i18n';

const core = {
  namespaced: true,
  state: {
    appName: 'Template',
    version: '1.0.0',
    pendingNetworkRequest: 0,
    currentLanguage: 'am',
  },
  mutations: {
    initializeStore(state) {
      // check if 'currentLanguage' exists
      if (localStorage.getItem('currentLanguage')) {
        let localStorageCurrentLanguage;
        try {
          localStorageCurrentLanguage = JSON.parse(
            localStorage.getItem('currentLanguage'),
          );
          const supportedLanguages = ['am', 'en'];
          if (supportedLanguages.indexOf(localStorageCurrentLanguage) === -1) {
            throw new Error('Unsupported current language on local storage');
          }
        } catch (error) {
          localStorageCurrentLanguage = 'am';
        }
        state.currentLanguage = localStorageCurrentLanguage;

        i18n.locale = state.currentLanguage;
      }
    },
    addPendingRequest(state) {
      state.pendingNetworkRequest += 1;
    },
    removePendingRequest(state) {
      state.pendingNetworkRequest -= 1;
    },
    toggleLanguage(state) {
      state.currentLanguage = state.currentLanguage === 'am' ? 'en' : 'am';
      i18n.locale = state.currentLanguage;
    },
  },
  getters: {
    getFullAppName: state => `${state.appName} v${state.version}`,
    getAppName: state => state.appName,
    isAmharic: state => state.currentLanguage === 'am',
    showNetworkProgressBar: state => state.pendingNetworkRequest > 0,
  },
};

const layout = {
  namespaced: true,
  state: {
    navDrawerToggle: true,
  },
  getters: {},
  mutations: {
    toggleNavBar(state) {
      state.navDrawerToggle = !state.navDrawerToggle;
    },
  },
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core,
    layout,
    theme,
  },
});
import Vue from 'vue';
import Vuex from 'vuex';
import contacts from './modules/contacts';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    contacts,
  },
});

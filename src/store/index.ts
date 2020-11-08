import Vue from 'vue';
import Vuex from 'vuex';
import StoreName from '@/constants/store/StoreName';
import game from './modules/game';
import core from './modules/core';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [StoreName.Game]: game,
    [StoreName.Core]: core,
  },
});

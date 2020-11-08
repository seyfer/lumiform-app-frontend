import CoreStoreState from '@/types/store/states/CoreStoreState';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state: CoreStoreState = {
  listableItemsResponse: null,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

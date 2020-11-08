import GameStoreState from '@/types/store/states/GameStoreState';
import getters from '@/store/modules/game/getters';
import actions from '@/store/modules/game/actions';
import mutations from '@/store/modules/game/mutations';

const state: GameStoreState = {
  activeUser: null,
  activeTerm: null,
  activeGame: null,
  movieGuessings: [],
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

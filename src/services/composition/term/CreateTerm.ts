import { reactive } from '@vue/composition-api';
import TermFactory from '@/services/factory/TermFactory';
import Vue from 'vue';
import { buildStoreOptions } from '@/services/store/helpers';
import GameStoreActions from '@/constants/store/game/GameStoreActions';
import StoreName from '@/constants/store/StoreName';
import store from '@/store';

export default function () {
  const newTerm = reactive(TermFactory());

  const createNewTerm = async (payload = newTerm) => {
    try {
      return await store.dispatch(buildStoreOptions(GameStoreActions.CREATE_TERM, StoreName.Game), {
        payload,
      });
    } catch (e) {
      Vue.prototype.$buefy.toast.open({
        message: e.response.data.message,
      });

      throw Error(e);
    }
  };

  return {
    newTerm,
    createNewTerm,
  };
}

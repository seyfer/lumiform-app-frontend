import { reactive } from '@vue/composition-api';
import userFactory from '@/services/factory/UserFactory';
import store from '@/store';
import StoreName from '@/constants/store/StoreName';
import GameStoreActions from '@/constants/store/game/GameStoreActions';
import Vue from 'vue';
import { buildStoreOptions } from '@/services/store/helpers';

export default function () {
  const newUser = reactive(userFactory());

  const createUser = async (user = newUser) => {
    try {
      return await store.dispatch(buildStoreOptions(GameStoreActions.CREATE_USER, StoreName.Game), {
        payload: user,
      });
    } catch (e) {
      Vue.prototype.$buefy.toast.open({
        message: e.response.data.message,
      });

      throw Error(e);
    }
  };

  return {
    newUser,
    createUser,
  };
}

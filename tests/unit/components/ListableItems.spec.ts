import { createLocalVue, shallowMount } from '@vue/test-utils';
import ListableItems from '@/components/ListableItems.vue';
import Vuex, { ActionTree, Store } from 'vuex';
import StoreName from '@/constants/store/StoreName';
import CoreStoreActions from '@/constants/store/core/CoreStoreActions';
import CoreStoreGetters from '@/constants/store/core/CoreStoreGetters';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('@/components/ListableItems.vue', () => {
  let store!: Store<any>;
  let actions: ActionTree<any, any>;
  let getters;
  const service = { list: () => ({}) };

  beforeEach(() => {
    actions = {
      [CoreStoreActions.GET_ITEMS]: jest.fn(),
    };

    getters = {
      [CoreStoreGetters.GET_LISTABLE_ITEMS_PAGE_META]: () => [],
      [CoreStoreGetters.GET_LISTABLE_ITEMS_ITEMS]: () => ({}),
    };

    store = new Vuex.Store({
      modules: {
        [StoreName.Core]: {
          namespaced: true,
          actions,
          getters,
        },
      },
    });
  });

  it('makes request as soon as component is created', async () => {
    const wrapper = shallowMount(ListableItems, {
      propsData: { service },
      localVue,
      store,
    });

    await wrapper.vm.$nextTick();
    setTimeout(() => {
      expect(actions[CoreStoreActions.GET_ITEMS]).toHaveBeenCalled();
    }, 400);
  });

  it('calls actions when config change', () => {
    const config = { params: { sort: '-username' } };
    shallowMount(ListableItems, {
      propsData: { service, config },
      localVue,
      store,
    });

    config.params.sort = 'username';

    setTimeout(() => {
      // toHaveBeenCalledTimes(2) -> because a call is made when component is initialized
      expect(actions[CoreStoreActions.GET_ITEMS]).toHaveBeenCalledTimes(2);
    }, 100);
  });
});

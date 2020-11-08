import CoreStoreState from '@/types/store/states/CoreStoreState';
import { AxiosResponsePaginatedMock } from '@/services/mocks/backend/AxiosMock';
import mutations from '@/store/modules/core/mutations';
import CoreStoreMutations from '@/constants/store/core/CoreStoreMutations';

describe('store/modules/core/getters', () => {
  let state!: CoreStoreState;
  let response!: ReturnType<typeof AxiosResponsePaginatedMock>;

  beforeEach(() => {
    response = AxiosResponsePaginatedMock();
    state = {
      listableItemsResponse: response,
    };
  });

  it('mutate the correct items', () => {
    mutations[CoreStoreMutations.SET_LISTABLE_ITEMS_RESPONSE](state, response);

    expect(state.listableItemsResponse).toMatchObject(response);
  });
});

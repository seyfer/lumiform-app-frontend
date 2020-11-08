import CoreStoreMutations from '@/constants/store/core/CoreStoreMutations';
import CoreStoreState from '@/types/store/states/CoreStoreState';
import { AxiosResponsePaginated } from '@/types/backend/Axios';

export default {
  [CoreStoreMutations.SET_LISTABLE_ITEMS_RESPONSE](
    state: CoreStoreState,
    response: AxiosResponsePaginated | null,
  ) {
    state.listableItemsResponse = response;
  },
};

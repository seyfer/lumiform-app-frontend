import CoreStoreGetters from '@/constants/store/core/CoreStoreGetters';
import CoreStoreState from '@/types/store/states/CoreStoreState';

export default {
  [CoreStoreGetters.GET_LISTABLE_ITEMS_ITEMS]: (state: CoreStoreState) => (
    state.listableItemsResponse?.data?.data ?? []
  ),
  [CoreStoreGetters.GET_LISTABLE_ITEMS_PAGE_META]: (state: CoreStoreState) => (
    state.listableItemsResponse?.data?.meta ?? {}
  ),
};

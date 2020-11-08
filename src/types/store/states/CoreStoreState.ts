import { AxiosResponsePaginated } from '@/types/backend/Axios';

interface CoreStoreState {
  listableItemsResponse: AxiosResponsePaginated | null;
}

export default CoreStoreState;

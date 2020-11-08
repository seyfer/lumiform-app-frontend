import CoreStoreActions from '@/constants/store/core/CoreStoreActions';
import CoreStoreMutations from '@/constants/store/core/CoreStoreMutations';
import ApiServiceContract from '@/types/services/api/ApiServiceContract';
import { AxiosRequestConfig } from 'axios';

export default {
  async [CoreStoreActions.GET_ITEMS](
    { commit }: { commit: Function },
    { service, config }: { service: Pick<ApiServiceContract<never>, 'list'>; config?: AxiosRequestConfig },
  ) {
    const response = await service.list(config);

    commit(CoreStoreMutations.SET_LISTABLE_ITEMS_RESPONSE, response);

    return response;
  },
};

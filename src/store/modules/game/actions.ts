import GameStoreActions from '@/constants/store/game/GameStoreActions';
import GameStoreMutations from '@/constants/store/game/GameStoreMutations';
import { AxiosRequestConfig } from 'axios';
import UserApiService from '@/services/api/UserApiService';
import TermApiService from '@/services/api/TermApiService';
import GameApiService from '@/services/api/GameApiService';

export default {
  async [GameStoreActions.CREATE_USER](
    { commit }: { commit: (mutation: GameStoreMutations, payload: any) => void },
    { payload, config }: { payload: any; config: AxiosRequestConfig },
  ) {
    const response = await UserApiService.create(payload, config);

    commit(GameStoreMutations.SET_ACTIVE_USER, response.data.data);

    return response;
  },
  async [GameStoreActions.CREATE_TERM](
    { commit }: { commit: (mutation: GameStoreMutations, payload: any) => void },
    { payload, config }: { payload: any; config: AxiosRequestConfig },
  ) {
    const response = await TermApiService.create(payload, config);

    commit(GameStoreMutations.SET_ACTIVE_TERM, response.data.data);

    return response;
  },
  async [GameStoreActions.CREATE_GAME](
    { commit }: { commit: (mutation: GameStoreMutations, payload: any) => void },
    { payload, config }: { payload: any; config: AxiosRequestConfig },
  ) {
    const response = await GameApiService.create(payload, config);

    commit(GameStoreMutations.SET_ACTIVE_GAME, response.data.data);

    return response;
  },
};

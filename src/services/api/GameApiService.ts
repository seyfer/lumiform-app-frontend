import ApiServiceContract from '@/types/services/api/ApiServiceContract';
import axios from '@/plugins/axios';
import { AxiosResponse } from '@/types/backend/Axios';
import Game from '@/types/backend/entities/Game';

const BASE_URL = 'game';

const GameApiService: ApiServiceContract<Game> = {
  list(config): Promise<AxiosResponse<Game[]>> {
    return axios.get(BASE_URL, config);
  },
  create(payload, config = {}) {
    return axios.post(`${BASE_URL}`, payload, config);
  },
};

export default GameApiService;

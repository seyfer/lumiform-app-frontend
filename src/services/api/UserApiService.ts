import ApiServiceContract from '@/types/services/api/ApiServiceContract';
import User from '@/types/backend/entities/User';
import axios from '@/plugins/axios';
import { AxiosResponse } from '@/types/backend/Axios';

const BASE_URL = 'user';

const UserApiService: ApiServiceContract<User> = {
  list(): Promise<AxiosResponse<User[]>> {
    throw Error('To be implemented');
  },
  create(payload, config = {}) {
    return axios.post(`${BASE_URL}`, payload, config);
  },
};

export default UserApiService;

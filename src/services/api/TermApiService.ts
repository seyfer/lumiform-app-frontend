import ApiServiceContract from '@/types/services/api/ApiServiceContract';
import axios from '@/plugins/axios';
import { AxiosResponse } from '@/types/backend/Axios';
import Term from '@/types/backend/entities/Term';

const BASE_URL = 'term';

const TermApiService: ApiServiceContract<Term> = {
  list(): Promise<AxiosResponse<Term[]>> {
    throw Error('To be implemented');
  },
  create(payload, config = {}): Promise<AxiosResponse<Term>> {
    return axios.post(`${BASE_URL}`, payload, config);
  },
};

export default TermApiService;

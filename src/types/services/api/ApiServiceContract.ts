import { AxiosResponse } from '@/types/backend/Axios';
import { AxiosRequestConfig } from 'axios';

interface ApiServiceContract<T, PAYLOAD = any> {
  list: (config?: AxiosRequestConfig) => Promise<AxiosResponse<T[]>>;
  create: (payload: PAYLOAD, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
}

export default ApiServiceContract;

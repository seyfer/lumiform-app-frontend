import axios from 'axios';
import RecursivelyCamelCaseObject from '@/services/helpers/object/RecursivelyCamelCaseObject';
import { AxiosParams } from '@/types/backend/Axios';
import Qs from 'qs';

const paramsSerializer = (params: AxiosParams) => Qs.stringify(params, { arrayFormat: 'comma' });

const instance = axios.create({
  baseURL: process.env.VUE_APP_BACK_END_API,
  paramsSerializer,
});

instance.interceptors.response.use(
  (response) => ({
    ...response,
    data: RecursivelyCamelCaseObject(response.data),
  }),
);

export default instance;

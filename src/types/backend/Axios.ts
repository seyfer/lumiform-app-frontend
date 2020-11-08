import { AxiosResponse as AR, AxiosRequestConfig as ARC } from 'axios';

export interface AxiosResponse<T> extends Omit<AR<T>, 'data'> {
  data: {
    data: T;
  };
}

export interface BackendPageMeta {
  currentPage: number;
  from: number;
  lastPage: number;
  path: string;
  perPage: number;
  to: number;
  total: number;
}

export interface AxiosResponsePaginated<T = any> extends Omit<AR<T>, 'data'> {
  data: {
    data: T;
    meta: BackendPageMeta;
    links: {[k: string]: string};
  };
}

export interface AxiosParams {
  filter?: {[k: string]: string | string[] | number | number[]};
  sort?: string[];
}

export interface AxiosRequestConfig extends Omit<ARC, 'params'> {
  params: AxiosParams;
}

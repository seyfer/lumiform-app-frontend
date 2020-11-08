import { AxiosResponsePaginated, BackendPageMeta } from '@/types/backend/Axios';
import faker from 'faker';

export const BackendPageMetaMock: () => BackendPageMeta = ({
  currentPage = faker.random.number(),
  from = faker.random.number(),
  lastPage = faker.random.number(),
  path = faker.internet.url(),
  perPage = faker.random.number(),
  to = faker.random.number(),
  total = faker.random.number(),
} = {}) => ({
  currentPage,
  from,
  lastPage,
  path,
  perPage,
  to,
  total,
});

export const AxiosResponsePaginatedMock: <T>(
  data?: Partial<AxiosResponsePaginated<T>>
) => AxiosResponsePaginated = ({
  data = { data: [], links: {}, meta: BackendPageMetaMock() },
} = {}) => ({
  data,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
});

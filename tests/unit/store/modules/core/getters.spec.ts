import CoreStoreState from '@/types/store/states/CoreStoreState';
import {
  AxiosResponsePaginatedMock,
  BackendPageMetaMock,
} from '@/services/mocks/backend/AxiosMock';
import getters from '@/store/modules/core/getters';
import CoreStoreGetters from '@/constants/store/core/CoreStoreGetters';
import factory from '@/services/mocks/factory';
import Movie from '@/types/backend/entities/Movie';
import MovieMock from '@/services/mocks/backend/entity/MovieMock';
import { BackendPageMeta } from '@/types/backend/Axios';

describe('store/modules/core/getters', () => {
  let state!: CoreStoreState;
  let response!: ReturnType<typeof AxiosResponsePaginatedMock>;

  beforeEach(() => {
    response = AxiosResponsePaginatedMock();
    state = {
      listableItemsResponse: response,
    };
  });

  it('gets the correct items (empty items)', () => {
    const items: never[] = getters[CoreStoreGetters.GET_LISTABLE_ITEMS_ITEMS](state);

    expect(items.length).toBe(0);
  });

  it('gets the correct items (not empty items)', () => {
    const numberInstances = 5;
    const movies = factory<Movie>(MovieMock, numberInstances).create();
    state.listableItemsResponse = AxiosResponsePaginatedMock({
      data: {
        data: movies,
        links: {},
        meta: BackendPageMetaMock(),
      },
    });
    const items: Movie[] = getters[CoreStoreGetters.GET_LISTABLE_ITEMS_ITEMS](state);

    expect(items.length).toBe(numberInstances);
    expect(items[0]).toMatchObject(movies[0]);
  });

  it('returns correct meta information', () => {
    const meta: BackendPageMeta = BackendPageMetaMock();
    state.listableItemsResponse = AxiosResponsePaginatedMock({
      data: {
        meta,
        data: [],
        links: {},
      },
    });
    const metaStore = getters[CoreStoreGetters.GET_LISTABLE_ITEMS_PAGE_META](state);

    expect(metaStore).toMatchObject(meta);
  });
});

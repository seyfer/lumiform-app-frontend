import ApiServiceContract from '@/types/services/api/ApiServiceContract';
import { AxiosResponsePaginatedMock } from '@/services/mocks/backend/AxiosMock';
import actions from '@/store/modules/core/actions';
import CoreStoreActions from '@/constants/store/core/CoreStoreActions';

describe('store/modules/core/actions', () => {
  let service!: Pick<ApiServiceContract<never>, 'list'>;
  let commit!: Function;
  let responseReturned!: ReturnType<typeof AxiosResponsePaginatedMock>;

  beforeEach(() => {
    responseReturned = AxiosResponsePaginatedMock();
    // We only have one action in the store and this action receives a service
    // so we can pass a mocked response to it. In cases where we don't
    // pass the service and an axios response will be made
    // we can use inject-loaders or use spies such as
    // Sinon.JS
    service = { list: async () => responseReturned };
    commit = jest.fn();
  });

  it('it fetches items', async () => {
    const response = await actions[CoreStoreActions.GET_ITEMS](
      { commit },
      { service },
    );

    expect(commit).toBeCalled();
    expect(response).toMatchObject(responseReturned);
  });
});

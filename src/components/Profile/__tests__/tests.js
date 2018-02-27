import * as profileUtils from '../profileUtils';

describe('testing profile utils', () => {
  test('should marge headers with additional header', () => {
    const defaultHeaders = profileUtils.tableHeaders;
    const additionalHeader = {
      Header: 'Test header',
      columns: []
    };

    expect(profileUtils.createTableHeaders(additionalHeader)).toEqual([ ...defaultHeaders, additionalHeader ]);
  });

  test('should join array of sort/order', () => {
    const sorting = [{ id: '1', desc: false }, { id: '2', desc: true }];
    const expectSorting = profileUtils.formatSorting(sorting);

    expect(expectSorting.sort).toEqual('1,2');
    expect(expectSorting.order).toEqual('asc,desc');
  });

  test('should return empty sort/order', () => {
    const expectSorting = profileUtils.formatSorting([]);

    expect(expectSorting.sort).toEqual('');
    expect(expectSorting.order).toEqual('');
  });

  test('should build query string by defined keys', () => {
    const options = {
      limit: 10,
      order: '',
      page: 1,
      sort: ''
    };

    const expectQuery = profileUtils.buildQueryOptions(options);

    expect(expectQuery).toEqual('?_limit=10&_page=1');
  });

  test('should return empty string', () => {
    const options = {
      limit: undefined,
      order: '',
      page: null,
      sort: ''
    };

    const expectQuery = profileUtils.buildQueryOptions(options);

    expect(expectQuery).toEqual('');
  });

  test('should create a query with zero values', () => {
    const options = {
      limit: 0,
      order: undefined,
      page: 0,
      sort: null
    };

    const expectQuery = profileUtils.buildQueryOptions(options);

    expect(expectQuery).toEqual('?_limit=0&_page=0');
  });
});

import React from 'react';

export const buildQueryOptions = (options) => {
  if (!Object.keys(options).length) {
    return '';
  }

  let queryOptions = Object.keys(options).reduce((acc, current, index) => {
    if (options[current] || options[current] === 0) {

      acc += index !== 0 ? '&' : '';
      acc += `_${current}=${options[current]}`;
    }

    return acc;
  }, '?');

  return queryOptions;
}

export const tableHeaders = [
  {
    Header: 'Name',
    columns: [
      {
        Header: 'First name',
        id: 'name.first',
        accessor: data => data.name.first
      },
      {
        Header: 'Last name',
        id: 'name.last',
        accessor: data => data.name.last
      }
    ]
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        sortable: false,
        filterable: false,
      }
    ]
  },
  {
    Header: 'Meta',
    columns: [
      {
        Header: 'Avatar',
        id: 'avatar',
        accessor: data => data.picture.large,
        sortable: false,
        filterable: false,
        Cell: row => (
          <div className="text-center"><img className="profile-avatar" src={row.value} alt="preview avatar" /></div>
        )
      }
    ]
  }
];

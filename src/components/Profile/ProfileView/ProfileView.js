import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { extendObservable, action } from 'mobx';
import { inject, observer } from 'mobx-react';

import ProfilesTable from '../ProfilesTable/ProfilesTable';

import { createTableHeaders, formatSorting } from '../profileUtils';

@inject('store')
@observer
export class ProfileView extends Component {

  constructor() {
    super();

    this.paginate = extendObservable(this, {
      page: 1,
      limit: 15,
      sort: '',
      order: ''
    });
  }

  headers = []

  pageOptions = {
    showPageSizeOptions: false
  }

  componentDidMount() {
    this.createHeaders();
  }

  createHeaders() {
    this.headers = createTableHeaders({
      Header: 'Format',
      columns: [
        {
          Header: 'Edit',
          sortable: false,
          filterable: false,
          Cell: row => (
            <div className="text-center">
              <button onClick={() => this.onEditHandle(row)}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </div>
          )
        },
        {
          Header: 'Remove',
          sortable: false,
          filterable: false,
          Cell: row => (
            <div className="text-center">
              <button onClick={() => this.onRemoveHandle(row)}>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          )
        }
      ]
    });
  }

  onEditHandle = ({ original }) => {
    this.props.history.push(`/edit-profile/${original.id}`)
  }

  onRemoveHandle = ({ original }) => {
    this.props.store.profilesStore.removeProfile(original.id).then(_ => {
      this.props.store.profilesStore.fetchProfiles(this.paginate);
    });
  }

  @action fetchData = ({ page, sorted }) => {
    const updatedPaginate = {
      limit: this.paginate.limit,
      page: ++page,
      ...this.formatSort(sorted)
    }

    this.props.store.profilesStore.fetchProfiles(updatedPaginate).then(action(_ => {
      this.paginate = extendObservable(this, updatedPaginate);
    }));
  }

  getTotalPages(total, limit) {
    return Math.ceil(total / limit);
  }

  formatSort(sorting) {
    return formatSorting(sorting);
  }

  render() {
    const { profilesStore } = this.props.store;
    const pageSize = this.getTotalPages(profilesStore.total, this.paginate.limit);

    return (
      <Grid>
        <Row>
          <Col>
            <ProfilesTable
              manual
              headers={this.headers}
              loading={profilesStore.isFetching}
              pages={pageSize}
              // https://mobx.js.org/refguide/array.html
              data={profilesStore.data.slice()}
              pageSize={this.paginate.limit}
              pageOptions={this.pageOptions}
              onFetchData={this.fetchData}
              className={'-striped -highlight'} />
          </Col>
        </Row>
      </Grid> 
    )
  }
};

export default ProfileView;

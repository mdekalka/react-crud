import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col } from 'react-bootstrap';

import ProfilesTable from '../ProfilesTable/ProfilesTable';

import { profileActions } from '../re-ducks/';
import { createTableHeaders, formatSorting } from '../profileUtils';

export class ProfileView extends Component {
  state = {
    paginate: {
      page: 1,
      limit: 15,
      sort: '',
      order: ''
    }
  }

  headers = []

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
    this.props.profileActions.removeProfile(original.id).then(_ => {
      this.props.profileActions.fetchProfiles(this.state.paginate);
    });
  }

  pageOptions = {
    showPageSizeOptions: false
  }

  fetchData = ({ page, sorted }) => {
    const updatedPaginate = {
      ...this.state.paginate,
      page: ++page,
      ...this.formatSort(sorted)
    };

    this.props.profileActions.fetchProfiles(updatedPaginate).then(_ => {
      this.setState({
        paginate: updatedPaginate
      });
    });
  }

  getTotalPages(total, limit) {
    return Math.ceil(total / limit)
  }

  formatSort(sorting) {
    return formatSorting(sorting);
  }

  render() {
    const pageSize = this.getTotalPages(this.props.total, this.state.paginate.limit);

    return (
      <Grid>
        <Row>
          <Col>
            <ProfilesTable
              manual
              headers={this.headers}
              loading={this.props.isFetching}
              pages={pageSize}
              data={this.props.data}
              pageSize={this.state.paginate.limit}
              pageOptions={this.pageOptions}
              onFetchData={this.fetchData}
              className={'-striped -highlight'} />
          </Col>
        </Row>
      </Grid> 
    )
  }
};

const mapStateToProps = (state) => ({
  data: state.profiles.data,
  total: state.profiles.total,
  isFetching: state.profiles.isFetching,
  errorMessage: state.profiles.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  profileActions: bindActionCreators(profileActions, dispatch)
});

ProfileView = connect(mapStateToProps, mapDispatchToProps)(ProfileView);

export default ProfileView;

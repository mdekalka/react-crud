import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import './ProfilesTable.scss';

class ProfilesTable extends Component {
  static propTypes = {
    data: PropTypes.array,
    headers: PropTypes.array,
    manual: PropTypes.bool,
    loading: PropTypes.bool,
    pages: PropTypes.number,
    pageOptions: PropTypes.object,
    onFetchData: PropTypes.func,
    pageSize: PropTypes.number,
    className: PropTypes.string
  }

  static defaultProps = {
    data: [],
    headers: [],
    manual: false,
    loading: false,
    pages: 0,
    pageOptions: {},
    onFetchData: () => {},
    pageSize: null,
    className: ''
  }

  render() {
    return (
      <div className="profiles-table-container">
        <ReactTable
          data={this.props.data}
          columns={this.props.headers}
          manual={this.props.manual}
          loading={this.props.loading}
          pages={this.props.pages}
          showPageSizeOptions={this.props.pageOptions.showPageSizeOptions}
          onFetchData={this.props.onFetchData}
          pageSize={this.props.pageSize}
          className={this.props.className} />
      </div>
    )
  }
}

export default ProfilesTable;
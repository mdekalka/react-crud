import React, { Component } from 'react';
import ReactTable from 'react-table';

import './ProfilesTable.scss';

class ProfilesTable extends Component {
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
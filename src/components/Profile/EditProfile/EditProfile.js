import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import ProfileForm from '../ProfileForm/ProfileForm';

import { ROLES } from '../../../constants/constants';

export class EditProfile extends Component {
  componentDidMount() {
    this.props.loadProfile(this.props.match.params.id);
  }

  onUpdateProfile = (profile) => {
    this.props.updateProfile(this.props.match.params.id, profile);
  }

  render() {
    return (
      <div>
        <EditProfile roles={ROLES} onSubmit={this.onUpdateProfile} error={this.props.errorMessage} />
      </div>
    )
  }
}

export default EditProfile;

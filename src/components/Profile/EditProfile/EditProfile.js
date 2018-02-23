import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import ProfileForm from '../ProfileForm/ProfileForm';

import { profileActions } from '../re-ducks';
import { ROLES } from '../../../constants/constants';

const EDIT_PROFILE_FORM_NAME = 'edit-profile';
let EditProfileForm = reduxForm({
  form: EDIT_PROFILE_FORM_NAME
})(ProfileForm);
const selector = formValueSelector(EDIT_PROFILE_FORM_NAME);

EditProfileForm = connect(state => {
  return {
    initialValues: state.profiles.currentProfile,
    enableReinitialize: true,
    avatar: selector(state, 'picture.large')
  }
})(EditProfileForm);

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
        {this.props.errorMessage
          ? <div className="text-center">Profile can't be loaded</div>
          : <EditProfileForm roles={ROLES} onSubmit={this.onUpdateProfile} error={this.props.errorMessage} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.profiles.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  loadProfile: bindActionCreators(profileActions.fetchProfile, dispatch),
  updateProfile: bindActionCreators(profileActions.updateProfile, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

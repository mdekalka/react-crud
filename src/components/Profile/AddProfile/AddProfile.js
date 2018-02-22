import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector, reset } from 'redux-form';
import cuid from 'cuid';

import ProfileForm from '../../Profile/ProfileForm/ProfileForm';

import { profileActions } from '../re-ducks';
import { ROLES } from '../../../constants/constants';

const ADD_PROFILE_FORM_NAME = 'add-profile';
let AddProfileForm = reduxForm({
  form: ADD_PROFILE_FORM_NAME
})(ProfileForm);
const selector = formValueSelector(ADD_PROFILE_FORM_NAME);

AddProfileForm = connect(state => ({
  avatar: selector(state, 'picture.large')
}))(AddProfileForm);

class AddProfile extends Component {
  onAddProfile = (profile) => {
    const newProfile = {
      ...profile,
      registered: new Date(),
      id: cuid()
    };

    this.props.addProfile(newProfile).then(_ => {
      if (this.props.errorMessage) {
        return;
      }

      this.props.dispatch(reset(ADD_PROFILE_FORM_NAME));
    });
  }
  
  render() {
    return (
      <div>
        <AddProfileForm roles={ROLES} onSubmit={this.onAddProfile} errorMessage={this.props.errorMessage} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.profiles.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  addProfile: bindActionCreators(profileActions.addProfile, dispatch),
  dispatch
});

AddProfile = connect(mapStateToProps, mapDispatchToProps)(AddProfile);

export default AddProfile;

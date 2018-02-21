import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector, reset } from 'redux-form';
import cuid from 'cuid';

import AddProfileForm from '../../Profile/AddProfileForm/AddProfileForm';

import { profileActions } from '../re-ducks';
import profileModel from '../profileModel';
import { ROLES } from '../../../constants/constants';

const ADD_PROFILE_FORM_NAME = 'add-profile';

let AddProfileFormStore = reduxForm({
  form: ADD_PROFILE_FORM_NAME,
  initialValues: { ...profileModel }
})(AddProfileForm);
const selector = formValueSelector(ADD_PROFILE_FORM_NAME)

AddProfileFormStore = connect(state => ({
  errorMessage: state.profiles.errorMessage,
  avatar: selector(state, 'picture.large')
}))(AddProfileFormStore)

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
    })
  }
  
  render() {
    return (
      <div>
        <AddProfileFormStore roles={ROLES} onSubmit={this.onAddProfile} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.profiles.errorMessage
})

const mapDispatchToProps = (dispatch) => ({
  addProfile: bindActionCreators(profileActions.addProfile, dispatch),
  dispatch
});

AddProfile = connect(mapStateToProps, mapDispatchToProps)(AddProfile);

export default AddProfile;

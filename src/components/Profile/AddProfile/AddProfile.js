import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import cuid from 'cuid';

import AddProfileForm from '../../Profile/AddProfileForm/AddProfileForm';
import profileModel from '../profileModel';
import { ROLES } from '../../../constants/constants';

const AddProfileFormStore = reduxForm({
  form: 'add-profile',
  initialValues: { ...profileModel }
})(AddProfileForm)

class AddProfile extends Component {
  onAddProfile = (profile) => {
    const newProfile = {
      ...profile,
      registered: new Date(),
      id: cuid()
    };
  }
  
  render() {
    return (
      <div>
        <AddProfileFormStore roles={ROLES} onSubmit={this.onAddProfile} />
      </div>
    )
  }
}

export default AddProfile;

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import cuid from 'cuid';

import AddProfileForm from '../../Profile/AddProfileForm/AddProfileForm';
import { ROLES } from '../../../constants/constants';

const AddProfileFormStore = reduxForm({
  form: 'add-profile',
  initialValues: {
    roles: [ROLES[0]]
  }
})(AddProfileForm)

class AddProfile extends Component {
  onAddProfile = (profile) => {
    const newProfile = {
      ...profile,
      id: cuid(),
      roles: [ROLES.find(role => role.value === profile.roles)]
    }
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

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import AddProfileForm from '../../Profile/AddProfileForm/AddProfileForm';
import { ROLES } from '../../../constants/constants';

const AddProfileFormStore = reduxForm({
  form: 'add-profile'
})(AddProfileForm)

class AddProfile extends Component {
  onAddProfile = (profile) => {
    console.log(profile)
    debugger
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

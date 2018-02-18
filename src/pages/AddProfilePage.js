import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import AddProfile from '../components/Profile/AddProfile';
import { ROLES } from '../constants/constants';

const AddProfileForm = reduxForm({
  form: 'add-profile'
})(AddProfile)

class AddProfilePage extends Component {
  onAddProfile = (profile) => {
    console.log(profile)
  }
  
  render() {
    return (
      <div>
        <AddProfileForm roles={ROLES} onSubmit={this.onAddProfile} />
      </div>
    )
  }
}

export default AddProfilePage;

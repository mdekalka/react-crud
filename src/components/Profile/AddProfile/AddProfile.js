import React, { Component } from 'react';
import cuid from 'cuid';
import { inject, observer } from 'mobx-react';

import ProfileForm from '../../Profile/ProfileForm/ProfileForm';
import AddProfileForm from './AddProfileForm';

import { ROLES } from '../../../constants/constants';

const addProfileForm = new AddProfileForm();

// @inject('store')
// @observer
class AddProfile extends Component {
  onAddProfile = (profile) => {
    const newProfile = {
      ...profile,
      registered: new Date(),
      id: cuid()
    };

    this.props.store.profilesStore.addProfile(newProfile).then(_ => {
      if (this.props.errorMessage) {
        return;
      }
    });
  }
  
  render() {
    return (
      <div>
        <ProfileForm roles={ROLES} form={addProfileForm} />
      </div>
    )
  }
}

export default AddProfile;

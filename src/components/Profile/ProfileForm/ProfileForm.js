import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Grid, Row, Col, ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';

import InputField from '../../common/forms/InputField';
import SelectObject from '../../common/forms/SelectObject';
import RadioGroup from '../../common/forms/RadioGroup';
import ImageField from '../../common/forms/ImageField';
import ImagePreview from '../../common/ImagePreview/ImagePreview';

import { required, email } from '../../../utils/validation';

import './ProfileForm.scss';

class ProfileForm extends Component {
  static propTypes = {
    roles: PropTypes.array,
    errorMessage: PropTypes.string,
    avatar: PropTypes.string
  }

  static defaultProps = {
    roles: [],
    errorMessage: '',
    avatar: null
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, roles, avatar, errorMessage } = this.props;

    return (
      <Grid>
        <form className="add-profile-form" onSubmit={handleSubmit}>
          <Row>
            <Col xs={6}>
              <Field
                component={InputField}
                name="name.first"
                type="text"
                label="First Name"
                validate={required} />
            </Col>
            <Col xs={6}>
              <Field
                name="name.last"
                component={InputField}
                type="text"
                label="Last Name"
                validate={required} />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Field
                className="form-control"
                name="title"
                component={InputField}
                type="text"
                label="Title"
                validate={required} />
            </Col>
            <Col xs={6}>
              <Field
                className="form-control"
                name="email"
                component={InputField}
                type="email"
                label="Email"
                validate={[required, email]} />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Field component={RadioGroup} name="gender" label="Gender" validate={required} options={[
                  { title: 'Male', value: 'male' },
                  { title: 'Female', value: 'female' }
              ]} />
            </Col>
            <Col xs={6}>
              <Field component={ImageField} name="picture.large" label="Select avatar" />
              {!!avatar && <ImagePreview src={avatar} />}
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Field
                className="form-control"
                name="phone"
                component={InputField}
                type="text"
                label="Phone" />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Field name="roles" multiple options={roles} component={SelectObject} type="select-multiple" label="Chose role" />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button type="submit" disabled={pristine || submitting} bsStyle="success">Success</Button>
                  <Button disabled={pristine || submitting} onClick={reset}>Reset</Button>
                </ButtonGroup>
                {errorMessage && <span className="bg-danger">{errorMessage}</span>}
              </ButtonToolbar>
            </Col>
          </Row>
        </form>
      </Grid>
    )
  }
}

export default ProfileForm;

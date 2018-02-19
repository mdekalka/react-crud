import React, { Component } from 'react';
import PropType from 'prop-types';
import { Field } from 'redux-form';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

import { required, email, onlyNumber, phoneNumber } from './validation';

import './AddProfileForm';




class AddProfileForm extends Component {
  static propTypes = {
    roles: PropType.array
  }

  static defaultProps = {
    roles: []
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, roles } = this.props;

    return (
      <Grid>
        <form className="add-profile-form" onSubmit={handleSubmit}>
          <Row>
            <Col xs={6}>
              <Field
                component={inputWithError}
                name="firstName"
                type="text"
                label="First Name"
                validate={required} />
            </Col>
            <Col xs={6}>
              <Field
                name="lastName"
                component={inputWithError}
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
                component={inputWithError}
                type="text"
                label="Title"
                validate={required} />
            </Col>
            <Col xs={6}>
              <Field
                className="form-control"
                name="email"
                component={inputWithError}
                type="email"
                label="Email"
                validate={[required, email]} />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div className="form-group">
                <label>Sex</label>
                <div>
                  <label className="radio-inline">
                    <Field
                      name="sex"
                      component={inputWithError}
                      type="radio"
                      value="male"
                      validate={required}
                    /> Male
                  </label>
                  <label className="radio-inline">
                    <Field
                      name="sex"
                      component={inputWithError}
                      type="radio"
                      value="female"
                      validate={required}
                    /> Female
                  </label>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Field
                className="form-control"
                name="phone"
                component={inputWithError}
                type="text"
                label="Phone"
                validate={[onlyNumber, phoneNumber]} />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div className="form-group">
                <label>Chose role</label>
                <div>
                  <Field name="roles" component={inputWithError} type="select" validate={required}>
                    {roles.map(role => (
                      <option key={role.key} value={role.value}>{role.title}</option>
                    ))}
                  </Field>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <ButtonToolbar>
                <Button type="submit" disabled={pristine || submitting} bsStyle="success">Success</Button>
                <Button disabled={pristine || submitting} onClick={reset}>Reset</Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </form>
      </Grid>
    )
  }
}

export default AddProfileForm;

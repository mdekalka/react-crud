import React, { Component } from 'react';
import PropType from 'prop-types';
import { Field } from 'redux-form';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

import './AddProfile.scss';

class AddProfile extends Component {
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
              <div className="form-group">
                <label>First Name</label>
                <div>
                  <Field
                    className="form-control"
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <label>Last Name</label>
                <div>
                  <Field
                    className="form-control"
                    name="lastName"
                    component="input"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div className="form-group">
                <label>Title</label>
                <div>
                  <Field
                    className="form-control"
                    name="title"
                    component="input"
                    type="text"
                    placeholder="Title"
                  />
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="form-group">
                <label>Email</label>
                <div>
                  <Field
                    className="form-control"
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
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
                      component="input"
                      type="radio"
                      value="male"
                    /> Male
                  </label>
                  <label className="radio-inline">
                    <Field
                      name="sex"
                      component="input"
                      type="radio"
                      value="female"
                    /> Female
                  </label>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div className="form-group">
                <label>Phone</label>
                <div>
                  <Field
                    className="form-control"
                    name="phone"
                    component="input"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div className="form-group">
                <label>Chose role</label>
                <div>
                  <Field name="roles" component="select">
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

export default AddProfile;

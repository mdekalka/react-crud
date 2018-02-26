import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';

import InputField from '../../common/forms/InputField';
import SelectObject from '../../common/forms/SelectObject';
import RadioGroup from '../../common/forms/RadioGroup';
import ImageField from '../../common/forms/ImageField';
import ImagePreview from '../../common/ImagePreview/ImagePreview';

import { required, email } from '../../../utils/validation';

import './ProfileForm.scss';

@observer
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
    const { form } = this.props;

    return (
      <Grid>
        <form className="add-profile-form" onSubmit={form.onSubmit}>
          <Row>
            <Col xs={6}>
              <InputField field={form.$('name').$('first')} />
            </Col>
            <Col xs={6}>
              <InputField field={form.$('name').$('last')} />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
            <InputField field={form.$('title')} />
            </Col>
            <Col xs={6}>
              <InputField type="email" field={form.$('email')} />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              {/* <Field component={RadioGroup} name="gender" label="Gender" validate={required} options={[
                  { title: 'Male', value: 'male' },
                  { title: 'Female', value: 'female' }
              ]} /> */}
            </Col>
            <Col xs={6}>
              <ImageField field={form.$('picture').$('large')} />
              {/* {!!avatar && <ImagePreview src={avatar} />} */}
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <InputField field={form.$('phone')} />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              {/* <Field name="roles" multiple options={roles} component={SelectObject} type="select-multiple" label="Chose role" /> */}
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button type="submit" bsStyle="success">Success</Button>
                  <Button onClick={form.onReset}>Reset</Button>
                </ButtonGroup>
                {/* {errorMessage && <span className="bg-danger">{errorMessage}</span>} */}
              </ButtonToolbar>
            </Col>
          </Row>
        </form>
      </Grid>
    )
  }
}

export default ProfileForm;

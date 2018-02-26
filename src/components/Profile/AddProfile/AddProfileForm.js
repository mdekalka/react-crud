import { Form } from 'mobx-react-form';
import validatorjs from 'validatorjs';
import PropTypes from 'prop-types';

export default class MyForm extends Form {
  static propTypes = {
    onSuccess: PropTypes.func,
    onError: PropTypes.func
  }

  static defaultProps = {
    onSuccess: () => {},
    onError: () => {}
  }

  plugins() {
    return { dvr: validatorjs };
  }

  setup() {
    return {
      fields: [{
        name: 'name',
        fields: [{
          name: 'first',
          label: 'First Name',
          placeholder: 'First Name',
          rules: 'required',
          value: ''
        },
        {
          name: 'last',
          label: 'Last Name',
          placeholder: 'Last Name',
          rules: 'required',
          value: ''
        }]
      },
      {
        name: 'title',
        label: 'Title',
        placeholder: 'Title',
        rules: 'required',
        value: ''
      },
      {
        name: 'email',
        label: 'Email',
        placeholder: 'Email',
        rules: 'required|email',
        value: ''
      },
      {
        name: 'phone',
        label: 'Phone',
        placeholder: 'Phone',
        value: ''
      },
      {
        name: 'picture',
        fields: [{
          name: 'large',
          label: 'Choose avatar',
          placeholder: 'Choose avatar',
          rules: 'required',
        },
        {
          name: 'thumbnail',
          label: 'Chose avatar',
        }]
      }]
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        debugger
        // this.props.onSuccess(form.values());
      },
      onError(form) {
        debugger
        // this.props.onError(form.errors());
      }
    };
  }
}
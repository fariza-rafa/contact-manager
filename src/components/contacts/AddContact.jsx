import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/actions/contactAction';
import PropTypes from 'prop-types';
import TextInputField from '../common/TextInputField';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onHandleChange = e => {
    // Clear the error field as user types.
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({ [e.target.name]: e.target.value, errors });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Simple Form validation
    if (name === '') {
      this.setState({
        errors: { name: 'Name field is required' }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: { email: 'Email ield is required' }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: { phone: 'Field is required' }
      });
      return;
    }

    // Add Contact
    const newContact = {
      name,
      email,
      phone
    };

    // Submit contact
    this.props.addContact(newContact);

    this.props.history.push('/');

    // Clear the state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });
  };
  render() {
    const { name, email, phone, errors } = this.state;
    const isEnabled = name.length > 0 && email.length > 0 && phone.length > 0;
    return (
      <div className="card mb-3">
        <div className="card-header">
          <h1>Add Contact</h1>
        </div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <TextInputField
              label="Name:"
              name="name"
              placeholder="Enter Name..."
              value={name}
              onChange={this.onHandleChange}
              error={errors.name}
            />
            <TextInputField
              label="Email:"
              type="email"
              name="email"
              placeholder="Enter email..."
              value={email}
              onChange={this.onHandleChange}
              error={errors.email}
            />
            <TextInputField
              label="Phone:"
              name="phone"
              placeholder="Enter Phone..."
              value={phone}
              onChange={this.onHandleChange}
              error={errors.phone}
            />
            <button
              disabled={!isEnabled}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Add Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

AddContact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  addContact: PropTypes.func.isRequired
};

export default connect(
  null,
  { addContact }
)(AddContact);
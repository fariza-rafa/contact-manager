import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../redux/actions/contactAction';
import PropTypes from 'prop-types';
import Contact from '../contacts/Contact';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <Fragment>
        <h1 className="display-5 mb-2">
          <span className="text-info">Contacts</span>
        </h1>
        {contacts.length === 0
          ? 'No Contacts'
          : contacts.map(contact => (
              <Contact key={contact.id} contact={contact} />
            ))}
      </Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
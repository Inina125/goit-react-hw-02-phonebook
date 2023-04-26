import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DeleteBtn, Item, ListCont } from './ContactList.styled';

class ContactList extends Component {
  render() {
    let contactItems = this.props.contacts;
    if (this.props.filter) {
      contactItems = contactItems.filter(item =>
        item.name.includes(this.props.filter)
      );
    }

    return (
      <ListCont>
        {contactItems.map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <DeleteBtn onClick={() => this.props.deleteContact(contact.id)}>
              Delete
            </DeleteBtn>
          </Item>
        ))}
      </ListCont>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

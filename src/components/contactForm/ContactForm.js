import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { AddBtn, Field, FormCont } from './ContactForm.styled';

class ContactForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    this.props.newContact({ name, number });
  };

  render() {
    return (
      <FormCont onSubmit={this.handleSubmit}>
        <Field type="text" name="name" title="Enter contact name" />
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <AddBtn type="submit">Add contact</AddBtn>
      </FormCont>
    );
  }
}

ContactForm.propTypes = {
  newContact: PropTypes.func.isRequired,
};

export default ContactForm;

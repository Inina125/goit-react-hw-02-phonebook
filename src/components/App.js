import React, { Component } from 'react';
import GlobalStyle from 'components/GlobalStyles';
import { AppCont, HeadingPage, HeadingSection } from './App.styled';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.filter(item => item.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      return;
    }

    const id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  setFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  render() {
    return (
      <AppCont>
        <HeadingPage>Phonebook</HeadingPage>
        <ContactForm newContact={this.addContact} />

        <HeadingSection>Contacts</HeadingSection>
        <Filter filter={this.filter} setFilter={this.setFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </AppCont>
    );
  }
}

export default App;

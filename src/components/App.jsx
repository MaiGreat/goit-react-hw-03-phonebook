import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './ContactForm/ContactForm.module.css'



class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
            return  alert(`${newContact.name} is already in contacts!`);;
        }
  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact]
  }));
  }
  
  handleDeleteClick = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContact = JSON.parse(contacts);
  
    //робимо перевірку якщо parseContact=true, якщо parseContact не є null,
    // то ви записуємо їх у стан contacts якщо ні, то if не виконується.
    if (parseContact) {
      this.setState({contacts: parseContact})
    }
    
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }

  }

  
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
    <>
        <div className={css.container}>
        <h2 className={css.title}>Phonebook</h2>
          <ContactForm
            addContact={this.addContact}
          />
        <h2 className={css.title}>Contact</h2>
          <Filter
            onChange={this.filterContacts}
            value={this.state.filter}
            
          />
          <ContactList
            contacts={filteredContacts}
            onClick={this.handleDeleteClick}
          />
      </div>
          
    </>
    );
    }
}

export default App;
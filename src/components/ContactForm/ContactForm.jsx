import React from 'react';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleContact = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      phone: e.target.elements.phone.value,
    };
    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <form onSubmit={handleContact} className={styles.wrapper}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h3>Number</h3>
      <input
        type="tel"
        name="phone"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
      />
      <button type="submit" className={styles.addButton}>
        Add
      </button>
    </form>
  );
};

export default ContactForm;

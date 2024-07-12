import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import propTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.wrapperList}>
      {contacts.map(contact => (
        <ContactListItem
          key={nanoid()}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string,
      name: propTypes.string.isRequired,
      phone: propTypes.string.isRequired,
      deleteContact: propTypes.func,
    })
  ),
};
export default ContactList;

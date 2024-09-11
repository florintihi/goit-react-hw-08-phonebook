import React from 'react';
import styles from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import propTypes from 'prop-types';
const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li key={id} className={styles.wrapperItem}>
      {name}: {number}
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string,
};

export default ContactListItem;

import React from 'react';
import styles from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import propTypes from 'prop-types';
const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <li key={id} className={styles.wrapperItem}>
      {name}: {phone}
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
  phone: propTypes.string.isRequired,
  id: propTypes.string,
};

export default ContactListItem;

import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import ClipLoader from 'react-spinners/ClipLoader';
import { getError, getIsLoading } from '../redux/contacts/selectors';
import ContactList from 'components/ContactList/ContactList';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <ClipLoader />}
      <ContactList />
    </div>
  );
}

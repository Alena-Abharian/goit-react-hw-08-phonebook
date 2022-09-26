import React, { useEffect } from 'react';
import ContactForm from './contactForm';
import Filter from './filter';
import ContactList from './contactList';
import { fetchContacts } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import { getContactsSelector } from '../redux/selectors';

const App = () => {
  const {status, error} = useSelector(getContactsSelector)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#2f2f2f',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {status === 'loading' && <Loader/>}
      {error && <h2>{error}</h2>}
      <ContactList />
    </div>
  );
};

export default App;

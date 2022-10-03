import React, { useEffect } from 'react';
import ContactForm from '../../components/contactForm';
import Filter from '../../components/filter';
import Loader from '../../components/Loader';
import ContactList from '../../components/contactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsSelector, getNameSelector } from '../../redux/selectors';
import { fetchContacts } from '../../redux/contacts/contactsOperations';

const Contacts = () => {
  const { status, error } = useSelector(getContactsSelector);
  const isTokenSettled = useSelector(getNameSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isTokenSettled) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isTokenSettled]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {status === 'loading' && <Loader />}
      {error && <h2>{error}</h2>}
      <ContactList />
    </div>

  );
};

export default Contacts;

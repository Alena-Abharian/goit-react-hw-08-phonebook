import React, { useEffect } from 'react';
import { notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/contactForm';
import Filter from '../../components/filter';
import Loader from '../../components/Loader';
import ContactList from '../../components/contactList';
import { getContactsSelector, getNameSelector } from '../../redux/selectors';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import s from './Contacts.module.css';

const Contacts = () => {
  const { status, error } = useSelector(getContactsSelector);
  const isTokenSettled = useSelector(getNameSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isTokenSettled) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isTokenSettled]);

  if (error) {
    notification.error({ message: error });
  }

  return (
    <div className={s.wrap}>
      <div>
        <h1 className={s.title}>Create a new contact</h1>
        <ContactForm/>
      </div>

      <div className={s.contacts}>
        <p className={s.text}> Find contacts by name</p>
        <Filter />
        {status === 'loading' && <Loader />}
        <ContactList />
      </div>

    </div>

  );
};

export default Contacts;

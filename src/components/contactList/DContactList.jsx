import React from 'react';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/operations';
import { filterContactsSelector, getItemsSelector } from '../../redux/selectors';



const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItemsSelector);
  const filter = useSelector(filterContactsSelector);

  return (
    <ul>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <span>&bull; {`${name}: ${number}`}</span>
            <button className={s.btn} onClick={() => dispatch(deleteContacts(id))}>delete</button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;

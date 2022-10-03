import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterItem } from '../../redux/contacts/contactsSlice';
import { filterContactsSelector } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterContactsSelector);
  const changeFilter = (e) => {
    dispatch(filterItem(e.target.value));
  };

  return (
    <label className={s.wrap}>
      Find contacts by name
      <input
        className={s.input}
        type='text'
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;

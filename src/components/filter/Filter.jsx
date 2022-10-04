import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterItem } from '../../redux/contacts/contactsSlice';
import { filterContactsSelector } from '../../redux/selectors';
import Search from 'antd/es/input/Search';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterContactsSelector);
  const changeFilter = (e) => {
    dispatch(filterItem(e.target.value));
  };

  return (
    <Search
      placeholder="Find contacts"
      style={{ width: 400 }}
      type='text'
      value={filter}
      onChange={changeFilter}
    />
  );
};

export default Filter;

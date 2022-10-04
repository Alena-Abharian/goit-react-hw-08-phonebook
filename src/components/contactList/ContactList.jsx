import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contactsOperations';
import { filterContactsSelector, getItemsSelector } from '../../redux/selectors';
import { List, Popover } from 'antd';
import Avatar from 'react-avatar';
import { ImBin, ImPencil } from 'react-icons/im';
import { BsThreeDots } from 'react-icons/bs';
import s from './ContactList.module.css';
import EditModal from '../editModal/EditModal';

const ContactList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState(null)
  const dispatch = useDispatch();
  const contacts = useSelector(getItemsSelector);
  const filter = useSelector(filterContactsSelector);

  const showModal = (data) => {
    setIsModalOpen(true);
    setDataModal(data)
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setDataModal(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataModal(null);
  };

  const content = (data) => (
   <ul className={s.list}>
      <li className={s.popover}><ImPencil onClick={() => showModal(data)}>update</ImPencil></li>
      <li className={s.item}><span>|</span></li>
      <li className={`${s.item} ${s.popover}`}><ImBin onClick={() => dispatch(deleteContacts(data.id))}>delete</ImBin></li>
    </ul>
  );

  return (
    <List className={s.wrap}>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <List.Item key={id}>
            <Avatar name={name} size='40' />
            <List.Item.Meta
              title={<a href='https://ant.design'>{`${name}`}</a>}
              description={`${number}`}
              className={s.itemContact}
            />
            <Popover className={s.popover} placement='left' content={content({ id, name, number })} trigger='click'>
              <BsThreeDots />
            </Popover>
          </List.Item>
        ))}
      <div className={s.notContact}>
        {!contacts.length && <span>No contacts</span>}
      </div>
      <EditModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} dataModal={dataModal}/>
    </List>
  );
};

export default ContactList;

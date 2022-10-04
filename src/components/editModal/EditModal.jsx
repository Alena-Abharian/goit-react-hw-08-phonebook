import React, { useEffect } from 'react';
import { Button, Form, Input, Modal, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsSelector } from '../../redux/selectors';
import { updateContacts } from '../../redux/contacts/contactsOperations';

const EditModal = ({ open, onOk, onCancel, dataModal }) => {
  const [form] = Form.useForm();
  const { status, item: contacts } = useSelector(getContactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    form.setFieldsValue(dataModal);
  }, [dataModal, form]);

  const notify = ({ message, type, description }) => {
    notification[type]({
      message,
      description,
    });
  };

  const handleSubmit = (data) => {
    const { name } = data;
    const isContactExist = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
    form.resetFields();
    if (isContactExist) {
      notify({
        type: 'warning',
        message: `${name} is already in contacts.`,
      });
    } else {
      dispatch(updateContacts({ ...dataModal, ...data }));
      onOk();
      notify({
        type: 'success',
        message: 'The contact has been successfully added',
      });
    }
  };

  return (
    <>
      <Modal forceRender footer={null} title='Edit your contact' open={open} onOk={onOk} onCancel={onCancel}>
        <Form
          form={form}
          name='edit-contact'
          style={{
            width: 450,
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name='name'
            rules={[
              {
                pattern: new RegExp(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/),
                message: 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan',
              },
              { required: true, message: 'Name number is mandatory field' },
            ]}
          >
            <Input placeholder='Contact name' />
          </Form.Item>

          <Form.Item
            name='number'
            rules={[
              {
                required: true,
                message: 'Phone number is mandatory field',
              },
              {
                pattern: new RegExp(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/),
                message: 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
              },
            ]}
          >
            <Input placeholder='Phone number' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block disabled={status === 'loading'}>
              Edit contact
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;

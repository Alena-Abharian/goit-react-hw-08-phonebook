import React from 'react';
import { addNewContacts } from '../../redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, notification } from 'antd';
import { getContactsSelector } from '../../redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { status, item: contacts } = useSelector(getContactsSelector);


  const notify = ({ message, type, description }) => {
    notification[type]({
      message,
      description,
    });
  };

  const handleSubmit = ({ name, number }) => {
    const isContactExist = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
    form.resetFields();

    if (isContactExist) {
      notify({
        type: 'warning',
        message: `${name} is already in contacts.`,
      });
    } else {
      dispatch(addNewContacts({ name, number }));
      notify({
        type: 'success',
        message: 'The contact has been successfully added',
      });
    }
  };

  return (
    <Form
      form={form}
      name='add-contact'
      style={{
        width: 400,
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
          Add contact
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;

import { useState } from 'react';
import { Form, Label, Input, Button } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/operations';

export const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const addNewContact = {
      id: nanoid(),
      name,
      number,
    };
    handleCheck(addNewContact);
    setName('');
    setNumber('');
  };

  const handleCheck = addNewContact => {
    contactList.find(
      contact => contact.name.toLowerCase() === addNewContact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(addNewContact));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label for="user_name">Name</Label>
      <Input
        id="user_name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label for="user_tel">Number</Label>

      <Input
        id="user_tel"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

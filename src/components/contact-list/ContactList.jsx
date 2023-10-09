import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { deleteContact } from 'redux/contactsSlice';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const NewContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {NewContactList.map(({ id, name, number }) => (
        <Item key={id}>
          {name} : {number}
          <Button type="button" onClick={() => dispatch(deleteContact({ id }))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selector';
import { deleteContact } from 'redux/operations';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContactList = useSelector(selectVisibleContacts);
  return (
    <List>
      {filteredContactList.map(({ id, name, number }) => (
        <Item key={id}>
          {name} : {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

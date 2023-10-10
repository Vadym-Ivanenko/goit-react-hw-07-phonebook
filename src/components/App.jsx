import { Phonebook } from './phonebook/Phonebook';
import { Filter } from './filter/Filter';
import { ContactList } from './contact-list/ContactList';
import { Wrapper, Title, Subtitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Phonebook />
      <Subtitle>Contacts</Subtitle>
      {contactList.length > 0 && <Filter />}
      <ContactList />
    </Wrapper>
  );
};

import { Phonebook } from './phonebook/Phonebook';
import { Filter } from './filter/Filter';
import { ContactList } from './contact-list/ContactList';
import { Wrapper, Title, Subtitle } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Phonebook />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

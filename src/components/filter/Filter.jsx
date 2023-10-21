import { useDispatch, useSelector } from 'react-redux';

import { filterContacts } from 'redux/contactsSlice';
import { Form, Label, Input } from './Filter.styled';
import { getFilter } from 'redux/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handelChange = evt => dispatch(filterContacts(evt.currentTarget.value));
  return (
    <Form>
      <Label for="filter">Find contacts by name</Label>

      <Input
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={handelChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Form>
  );
};

export default Filter;

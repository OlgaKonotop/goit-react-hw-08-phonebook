import {
  Contact,
  Button,
  ContactCard,
} from 'components/ContactItem/ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactCard>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={handleDelete}>
        Видалити
      </Button>
    </ContactCard>
  );
};

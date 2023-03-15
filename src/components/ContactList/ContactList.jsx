import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

import { selectFilter, selectAllContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filterValue = useSelector(selectFilter).toLowerCase().trim();
  console.log(contacts);

  const visibleContacts = contacts.filter(item => {
    return item.name.toLowerCase().includes(filterValue);
    // .sort((a, b) => a.name.localeCompare(b.name));
  });

  console.log(visibleContacts);
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem name={name} number={number} id={id} />
        </li>
      ))}
      {visibleContacts.length === 0 && filterValue === '' && (
        <p>телефонна книга порожня, будь ласка, додайте новий контакт</p>
      )}
      {visibleContacts.length === 0 && filterValue !== '' && (
        <p>немає співпадінь</p>
      )}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};

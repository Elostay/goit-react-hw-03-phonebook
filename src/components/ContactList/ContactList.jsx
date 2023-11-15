import { List } from './ContactList.styled';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, visibleContacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.length > 0 &&
        visibleContacts.map(({ name, id, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </List>
  );
};

export default ContactList;

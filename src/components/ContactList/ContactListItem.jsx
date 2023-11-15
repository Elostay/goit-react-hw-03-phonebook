import { Item, Button, NumberContainer, Number } from './ContactList.styled';
const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item id={id}>
      <NumberContainer>
        <p>{name}:</p> <Number>{number}</Number>
      </NumberContainer>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactListItem;

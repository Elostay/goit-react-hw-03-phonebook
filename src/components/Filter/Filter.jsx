import { nanoid } from 'nanoid';
import { FilterLabel, Input, Container } from './Filter.styled';

const Filter = ({ changeFilter, value }) => {
  const filterId = nanoid();
  return (
    <Container>
      <FilterLabel htmlFor={filterId}>Find contacts by name</FilterLabel>
      <Input
        type="text"
        value={value}
        id={filterId}
        onChange={changeFilter}
        placeholder="Enter contact name"
      />
    </Container>
  );
};

export default Filter;

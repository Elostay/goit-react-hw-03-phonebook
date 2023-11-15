import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Button, Label } from '../ContactForm/ContactForm.styled';

const nameId = nanoid();
const numberId = nanoid();

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    this.props.sumbit({ name, number });
    form.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          id={nameId}
          onChange={this.handleChange}
          required
        />

        <Label htmlFor={numberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          id={numberId}
          onChange={this.handleChange}
          required
        />

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;

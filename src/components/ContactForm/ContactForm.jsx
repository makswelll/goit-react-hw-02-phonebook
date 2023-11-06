import React, { Component } from 'react';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name === '' || number === '') {
      alert('Please enter both name and phone number for the contact.');
      return;
    }

    this.props.onAddContact(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
          placeholder="Enter name"
        />
        <input
          type="text"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          required
          placeholder="Enter phone number"
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

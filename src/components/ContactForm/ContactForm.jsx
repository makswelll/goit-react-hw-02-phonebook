import { Component } from 'react';
import { PhoneNumber } from 'components/PhoneNumber/PhoneNumber';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
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
        <PhoneNumber number={this.state.number} onChange={this.handleChange} />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

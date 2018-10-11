import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Button from '../Button';

class InlineForm extends React.Component {

  constructor() {
    super();
    this.state = {
      model: '',
      postalCode: '',
    };
  }

  renderInputs() {
    return this.props.inputs.map((input, i) => {
      return <input
        key={i}
        name={input.name}
        type={input.type || 'text'}
        value={input.value}
        onChange={(e) => input.handleChange(e)}
        placeholder={input.placeholder}/>;
    });
  }

  render() {
    return (
      <form className='inline-form'>
        {this.renderInputs()}
        <Button color='green' >{this.props.buttonText}</Button>
      </form>
    );
  }
}

InlineForm.propTypes = {
  buttonText: PropTypes.string,
  handleSubmit: PropTypes.func,
  inputs: PropTypes.array,
}

export default InlineForm;


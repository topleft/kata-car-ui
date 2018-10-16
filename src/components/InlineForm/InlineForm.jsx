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
        placeholder={input.placeholder}
        style={{width: input.width}}/>;
    });
  }

  render() {
    return (
      <form className='inline-form'>
        {this.renderInputs()}
        <Button color='green' handleClick={(e) => e.preventDefault()}>{this.props.buttonText}</Button>
      </form>
    );
  }
}

InlineForm.propTypes = {
  buttonText: PropTypes.string,
  handleSubmit: PropTypes.func,
  inputs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    width: PropTypes.string,
  })),
};

export default InlineForm;


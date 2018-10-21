import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import Button from '../Button';

class InlineForm extends React.Component {

  constructor() {
    super();
  }

  getInputWidth(width) {
    return this.props.match ? {width} : null;
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
        style={this.getInputWidth(input.width)}/>;

    });
  }

  render() {
    return (
      <form className='inline-form'>
        {this.renderInputs()}
        <Button color='green' handleClick={(e) => this.props.handleSubmit(e)}>{this.props.buttonText}</Button>
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
  match: PropTypes.bool,
};

export default InlineForm;


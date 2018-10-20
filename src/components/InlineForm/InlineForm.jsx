import React from 'react';
import PropTypes from 'prop-types';
import Media from "react-media";
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

  getInputWidth(width, mediaQueryMatch) {
    return mediaQueryMatch ? {width: width} : null;
  }

  renderInputs(mediaQueryMatch) {
    return this.props.inputs.map((input, i) => {
      return <input
        key={i}
        name={input.name}
        type={input.type || 'text'}
        value={input.value}
        onChange={(e) => input.handleChange(e)}
        placeholder={input.placeholder}
        style={this.getInputWidth(input.width, mediaQueryMatch)}/>;

    });
  }

  render() {
    return (
      <Media query={this.props.mediaQuery}>
        {
          (match) => (
            <form className='inline-form'>
              {this.renderInputs(match)}
              <Button color='green' handleClick={(e) => e.preventDefault()}>{this.props.buttonText}</Button>
            </form>
          )
        }
      </Media>
    );

  }
}

InlineForm.defaultProps = {
  mediaQuery: '',
};

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
  mediaQuery: PropTypes.string,
};

export default InlineForm;


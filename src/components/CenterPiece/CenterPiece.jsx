import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import InlineForm from '../InlineForm/InlineForm';



class CenterPiece extends React.Component {
  constructor() {
    super();
    this.state = {
      model: '',
      postalCode: '',
    };

    this.inputs = [
      {
        name: 'model',
        type: 'text',
        value: this.state.model,
        handleChange: (e) => this.setState({model: e.target.value}),
        placeholder: 'Search make or model',
      },
      {
        name: 'postalCode',
        type: 'text',
        value: this.state.postalCode,
        handleChange: (e) => this.setState({postalCode: e.target.value}),
        placeholder: 'Postal code',
      }
    ]
  }


  render() {

    const {title} = this.props;
    const {subtitle} = this.props;

    return (
      <div className='center-piece'>
        <div className='center-piece__title'>{title}</div>
        <div className='center-piece__subtitle'>{subtitle}</div>
        <InlineForm
          inputs={this.inputs}
          handleSubmit={() => console.log('Submit!!!')}
          buttonText='Find My Car'/>
      </div>
    );
  }
}

CenterPiece.PropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default CenterPiece;


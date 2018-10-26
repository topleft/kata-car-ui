import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import './styles.scss';
import InlineForm from '../InlineForm/InlineForm';
import car from '../../static/Mercedes-Benz-PNG-Transparent.png';

class CenterPiece extends React.Component {
  constructor() {
    super();
    this.state = {
      model: '',
      postalCode: '',
    };
  }

  get inputs() {
    return [
      {
        name: 'model',
        type: 'text',
        value: this.state.model,
        handleChange: (e) => {this.setState({model: e.target.value});},
        placeholder: 'Search make or model',
        width: '60%',
      },
      {
        name: 'postalCode',
        type: 'text',
        value: this.state.postalCode,
        handleChange: (e) => this.setState({postalCode: e.target.value}),
        placeholder: 'Postal code',
        width: '40%',
      }
    ];
  }

  render() {

    const {title, subtitle} = this.props;

    return (
      <div className='section'>
        <div className='center-piece'>
          <div className='center-piece__upper'>
            <div className='center-piece__title'>{title}</div>
            <div className='center-piece__subtitle'>{subtitle}</div>
            <Media query='(min-width: 640px)'>
              {(match) => (
                <InlineForm
                  inputs={this.inputs}
                  handleSubmit={() => console.log(`SUBMIT: ${JSON.stringify(this.state)}`)}
                  buttonText='Find My Car'
                  match={match}/>
              )}
            </Media>

          </div>
          <img
            className='center-piece__image'
            src={car}
            alt='White Mercedes Benz'/>
        </div>
      </div>
    );
  }
}

CenterPiece.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default CenterPiece;


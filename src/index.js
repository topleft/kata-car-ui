import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content';
import './styles/defaults.scss';
import './styles/section.scss';

const App = () => (
  <Content/>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);



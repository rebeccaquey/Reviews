import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import App from './components/App.jsx';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Root = () => (
  <Wrapper>
    <App />
  </Wrapper>
);

ReactDOM.render(<Root />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const Root = () => {
  return (
    <Wrapper>
      <App />
    </Wrapper>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

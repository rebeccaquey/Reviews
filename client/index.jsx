import React, { lazy, Suspense }from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
const App = lazy(()=> import('./components/App.jsx'));


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Root = () => (
  <Wrapper>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </Wrapper>
);

ReactDOM.render(<Root />, document.getElementById('root'));

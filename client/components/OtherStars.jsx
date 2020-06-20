import React from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';

const Wrapper = styled.div`
  margin-bottom: 24px;
  height: 110px;
  display: flex;
  flex-flow: column wrap;
`

const OtherStars = () => {
  return (
    <Wrapper>
      <Stars />
      <Stars />
      <Stars />
      <Stars />
      <Stars />
      <Stars />
    </Wrapper>
  );
};

export default OtherStars;
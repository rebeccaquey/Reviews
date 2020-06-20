import React from 'react';
import styled from 'styled-components';
import OneReview from './OneReview.jsx';

const Wrapper = styled.div`
  height: 600px;
  display: flex;
  flex-flow: column wrap;
`

const ReviewList = () => {
  return (
    <Wrapper>
      <OneReview />
      <OneReview />
      <OneReview />
      <OneReview />
      <OneReview />
      <OneReview />
    </Wrapper>
  );
};

export default ReviewList;

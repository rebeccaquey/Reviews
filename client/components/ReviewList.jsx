/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';

const Wrapper = styled.div`
  height: ${props => (props.modal ? '100%' : '600px')};
  display: flex;
  flex-flow: ${props => (props.modal ? 'column nowrap' : 'column wrap')};
`;

const ReviewList = ({ reviews, modal }) => {
  let frontReviews = reviews.slice(0, 6);
  if (modal) {
    frontReviews = reviews;
  }
  console.log(frontReviews);
  return (
    <Wrapper modal={modal}>
      {frontReviews.map((el, index) => (
        <Review modal={modal} key={index} review={el} />
      ))}
    </Wrapper>
  );
};

export default ReviewList;

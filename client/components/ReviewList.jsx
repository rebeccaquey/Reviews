/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import dayjs from 'dayjs';
const Review = lazy(() => import('./Review.jsx'));

// hheight 600px now
const Wrapper = styled.div`
  height: ${props => (props.modal ? '100%' : 'auto')};
  min-height: ${props => (props.modal ? 'auto' : '600px')};
  max-width: 1120px;
  display: flex;
  flex-flow: ${props => (props.modal ? 'column nowrap' : 'row wrap')};
  top: 0px;
  position: relative;
`;

const ReviewList = ({ reviews, modal }) => {
  let frontReviews = reviews.slice(0, 6);
  if (modal) {
    frontReviews = reviews;
  }
  return (
    <Wrapper modal={modal}>
    <Suspense fallback={<div>Loading...</div>}>
      {frontReviews.map((el, index) => {
        return (
          <LazyLoad once={true} overflow height={200} throttle={300}>
            <Review modal={modal} key={el.name} review={el} monthYear={dayjs(el.createdAt).format('MMMM YYYY')} />
          </LazyLoad> 
          );
      })}
      </Suspense>
    </Wrapper>
  );
};

export default React.memo(ReviewList);

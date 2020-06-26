import React, { lazy, Suspense } from 'react';
import AirbnbFont from '../fonts/fonts.js';
const ReviewContent = lazy(() => import('./ReviewContent.jsx'));

import {
  Wrapper, ReviewWrapper, Customer, ImageWrapper, NameDateWrapper, DateWrapper, Image, 
} from './ReviewStyle.jsx';

const Review = ({ review, modal, monthYear }) => {
  console.log('REVIEW RENDERED')
  return (
    <Wrapper modal={modal}>
      <AirbnbFont />
      <ReviewWrapper modal={modal}>
        <Customer modal={modal}>
          <ImageWrapper>
            <Image src={review.imageUrl} alt={review.name} />
          </ImageWrapper>
          <NameDateWrapper>
            {review.name}
            <DateWrapper>
              {monthYear}
            </DateWrapper>
          </NameDateWrapper>
        </Customer>
        <Suspense fallback={<div>Loading...</div>}>
          <ReviewContent content={review.content} contentLength={review.content.length} modal={modal} />
        </Suspense>
      </ReviewWrapper>
    </Wrapper>
  );
}

export default React.memo(Review);

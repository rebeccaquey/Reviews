import React from 'react';
import AirbnbFont from '../fonts/fonts.js';

import {
  Wrapper, ReviewWrapper, Customer, ImageWrapper, NameDateWrapper, DateWrapper, Image,
} from './ReviewStyle.jsx';
import ReviewContent from './ReviewContent.jsx';

const Review = ({ review, modal, monthYear }) => {
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
        <ReviewContent
          content={review.content}
          contentLength={review.content.length}
          modal={modal}
        />
      </ReviewWrapper>
    </Wrapper>
  );
};

export default Review;

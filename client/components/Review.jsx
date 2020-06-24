import React from 'react';
import moment from 'moment';
import AirbnbFont from '../fonts/fonts.js';

import {
  Wrapper, ReviewWrapper, Customer, ImageWrapper, NameDateWrapper, DateWrapper, Content, Image, Text,
} from './ReviewStyle.jsx';


const Review = ({ review, modal }) => {
  const monthYear = moment(review.createdAt).format('MMMM YYYY');
  return (
    <Wrapper modal={modal}>
      <AirbnbFont />
      <ReviewWrapper modal={modal}>
        {/* //customer */}
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
        {/* //content */}
        <Content modal={modal}>
          <Text modal={modal}>
            {review.content}
          </Text>
        </Content>

      </ReviewWrapper>
    </Wrapper>
  );
};

export default Review;

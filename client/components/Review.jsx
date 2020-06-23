import React from 'react';
import moment from 'moment';
import AirbnbFont from '../fonts/fonts.js';

import {
  Wrapper, ReviewWrapper, Customer, ImageWrapper, NameDateWrapper, DateWrapper, Content, Image, Text,
} from './ReviewStyle.jsx';


const Review = ({ review }) => {
  const monthYear = moment(review.createdAt).format('MMMM YYYY');
  return (
    <Wrapper>
      <AirbnbFont />
      <ReviewWrapper>
        {/* //customer */}
        <Customer>
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
        <Content>
          <Text>
            {review.content}
          </Text>
        </Content>

      </ReviewWrapper>
    </Wrapper>
  );
};

export default Review;

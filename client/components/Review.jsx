import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import AirbnbFont from '../fonts/fonts.js'

const Wrapper = styled.div`
  height: 199px;
  width: 41%;
  padding: 0px 8px;
  margin-right: 80px;
`

const ReviewWrapper = styled.div`
  height: 168px;
  margin-bottom: 31px;
`

const Customer = styled.div`
  height: 56px;
  margin-bottom: 16px;
  font-family: 'Montserrat';
  font-weight: 550;
  display: flex;
  align-items: center;
`
const ImageWrapper = styled.div`
  border-radius: 50%;

`

const NameDateWrapper = styled.div`
  line-height: 20px;
  margin-left: 12px;
  font-size: 15px;
  color: rgb(21, 25, 27);

`
const DateWrapper = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: rgb(98, 96, 94);
`

const Content = styled.div`
  height: 96px;
  font-family: 'Montserrat';
  font-weight: 400;
`
const Image = styled.img`
  height: 56px;
  width: 56px;
  cursor: pointer;
`

const Text = styled.div`
  color: rgb(21, 25, 27);
  font-size: 16px;
  line-height: 24px;
  height: 69px;
  max-width: 455px;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden; 
`


const Review = ({ review }) => {
  const monthYear = moment(review.createdAt).format('MMMM YYYY');
  return (
    <Wrapper>
      <AirbnbFont />
      <ReviewWrapper>
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
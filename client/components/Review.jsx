import React from 'react';
import styled from 'styled-components';

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
`

const Content = styled.div`
  height: 96px;
`
const Image = styled.img`
  height: 56px;
  width: 56px;
  cursor: pointer;
`

const Text = styled.div`
  color: rgb(21, 25, 27);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
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
  return (
    <Wrapper>
      <ReviewWrapper>
        <Customer>
          <Image src={review.imageUrl} alt={review.name} />
          {review.name}
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
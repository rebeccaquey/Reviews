import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 199px;
  width: 41%;
  padding: 0px 8px;
  margin-right: 80px;
`

const Review = styled.div`
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

const OneReview = () => {
  return (
    <Wrapper>
      <Review>
        <Customer>
          Name
        </Customer>
        <Content>
          Content
        </Content>
      </Review>
    </Wrapper>
  );
};

export default OneReview;
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 48px;
  padding-left: 8px;
`

const Button = styled.button`
  border: 1px solid rgb(21, 25, 27);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 12px 23px;
  position: relative;
  text-align: center;
  width: 201px;
  border-radius: 8px;
  background-clip: border-box;
  &:hover {
    background-color: rgb(240, 242, 242)
  }
  
`

const MoreReviews = ({ number, handleShowModal }) => {
  return (
    <Wrapper>
      <Button onClick={() => handleShowModal()}>{`Show all ${number} reviews`}</Button>
    </Wrapper>
  );
};

export default MoreReviews;

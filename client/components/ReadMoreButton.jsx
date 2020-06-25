import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: rgb(34, 34, 34);
  text-decoration: underline;
  outline: none;
  margin: 0px;
  padding: 0px;
  user-select: auto;
  font-size: inherit;
  font-family: inherit;
  font-style: inherit;
  line-height: inherit;
  -webkit-appearance: none;
  font-weight: 600;
`;

const ReadMoreButton = ({ handleExpanded, contentLength }) => {
  if (contentLength < 163) {
    return null;
  }
  return (
    <Button onClick={handleExpanded}>read more</Button>
  );
};

export default ReadMoreButton;

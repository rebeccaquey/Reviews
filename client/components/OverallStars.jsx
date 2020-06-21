import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 32px;
  height: 59px;
  padding-left: 8px;
  font-size: 20px;
`;

const textSpan = styled.span`

`

const IconSpan = styled.span`
  margin-right: 8px;
`

const Icon = styled.img`
  max-height: 26px;
  width: 17px;
`;

const OverallStars = ({ stars, number }) => (
  <Wrapper>
    <IconSpan>
      <Icon src="https://airbnbavatars.s3-us-west-1.amazonaws.com/icons/star-8-24.png" />
    </IconSpan>
    <textSpan>
      {`${stars} (${number} reviews)`}
    </textSpan>
  </Wrapper>
);

export default OverallStars;

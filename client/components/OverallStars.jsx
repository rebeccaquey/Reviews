import React from 'react';
import styled from 'styled-components';
import AirbnbFont from '../fonts/fonts.js'

const Wrapper = styled.div`
  padding-bottom: 32px;
  height: 27px;
  padding-left: 8px;
  font-size: 22px;
  font-family: 'Montserrat';
  font-weight: 550;
`;

const TextSpan = styled.span`
  
`;

const IconSpan = styled.span`
  margin-right: 8px;
`;

const Icon = styled.img`
  max-height: 26px;
  width: 17px;
`;

const OverallStars = ({ stars, number }) => (
  <Wrapper>
    <AirbnbFont />
    <IconSpan>
      <Icon src="https://airbnbavatars.s3-us-west-1.amazonaws.com/icons/star-8-24.png" />
    </IconSpan>
    <TextSpan>
      {`${stars} (${number} reviews)`}
    </TextSpan>
  </Wrapper>
);

export default OverallStars;

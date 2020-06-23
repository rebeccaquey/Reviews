import React from 'react';

import AirbnbFont from '../fonts/fonts.js'
import { Wrapper, TextSpan, IconSpan, Icon } from './OverallStarsStyle.jsx'

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

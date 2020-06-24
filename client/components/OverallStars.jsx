import React from 'react';

import AirbnbFont from '../fonts/fonts.js'
import { Wrapper, TextSpan, IconSpan, Icon } from './OverallStarsStyle.jsx'

const OverallStars = ({ stars, number, modal}) => (
  <Wrapper modal={modal}>
    <AirbnbFont />
    <IconSpan>
      <Icon modal={modal} src="https://airbnbavatars.s3-us-west-1.amazonaws.com/icons/star-8-24.png" />
    </IconSpan>
    <TextSpan>
      {`${stars} (${number} reviews)`}
    </TextSpan>
  </Wrapper>
);

export default OverallStars;

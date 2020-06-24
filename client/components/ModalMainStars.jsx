import React from 'react';
import styled from 'styled-components';

import AirbnbFont from '../fonts/fonts.js';
import {
  Wrapper, TextSpan, IconSpan, Icon,
} from './OverallStarsStyle.jsx';


const MainStars = ({ stars, number, modal }) => (
  <Wrapper modal={modal}>
    <AirbnbFont />
    <IconSpan>
      <Icon src="https://airbnbavatars.s3-us-west-1.amazonaws.com/icons/star-8-24.png" />
    </IconSpan>
    <TextSpan>
      {`${stars} (${number} reviews)`}
    </TextSpan>
  </Wrapper>
);

export default MainStars;

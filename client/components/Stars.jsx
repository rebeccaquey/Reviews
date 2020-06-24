import React from 'react';
import styled from 'styled-components';
import AirbnbFont from '../fonts/fonts.js';

import {
  Wrapper, StarContainer, NameWrapper, BarWrapper, NumberWrapper, Bar, Filler,
} from './StarsStyle.jsx';

const Stars = ({ starName, rating, modal }) => (
  <Wrapper modal={modal}>
    <AirbnbFont />
    <StarContainer modal={modal}>
      <NameWrapper modal={modal}>
        {starName}
      </NameWrapper>
      <BarWrapper modal={modal}>
        <Bar modal={modal}>
          <Filler number={`${((rating / 5) * 100).toFixed(2)}%`} />
        </Bar>
      </BarWrapper>
      <NumberWrapper modal={modal}>
        {rating}
      </NumberWrapper>

    </StarContainer>
  </Wrapper>
);

export default Stars;

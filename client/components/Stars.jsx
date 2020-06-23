import React from 'react';
import styled from 'styled-components';
import AirbnbFont from '../fonts/fonts.js';

import { Wrapper, StarContainer, NameWrapper, BarWrapper, NumberWrapper, Bar, Filler} from './StarsStyle.jsx';

const Stars = ({ starName, rating }) => (
  <Wrapper>
    <AirbnbFont />
    <StarContainer>
      <NameWrapper>
        {starName}
      </NameWrapper>
      <BarWrapper>
        <Bar>
          <Filler number={`${((rating / 5) * 100).toFixed(2)}%`} />
        </Bar>
      </BarWrapper>
      <NumberWrapper>
        {rating}
      </NumberWrapper>

    </StarContainer>
  </Wrapper>
);

export default Stars;

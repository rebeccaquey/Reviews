import React from 'react';
import styled from 'styled-components';

import Stars from './Stars.jsx';

const Wrapper = styled.div`
  margin-bottom: 24px;
  height: ${props => (props.modal ? 'calc(100%+16px)' : '110px')};
  display: flex;
  flex-flow: row wrap;
`;

const StarsList = ({ stars, modal }) => {
  const starNames = ['Cleanliness', 'Accuracy', 'Communication', 'Location', 'Check-in', 'Value'];
  const ratings = [
    stars.cleanliness,
    stars.accuracy,
    stars.communication,
    stars.location,
    stars.checkin,
    stars.value,
  ];
  return (
    <Wrapper modal={modal}>
      {starNames.map((element, index) => (
        <Stars modal={modal} key={element} starName={element} rating={ratings[index]} />
      ))}
    </Wrapper>
  );
};

export default StarsList;

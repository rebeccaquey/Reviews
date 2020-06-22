import React from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';

const Wrapper = styled.div`
  margin-bottom: 24px;
  height: 110px;
  display: flex;
  flex-flow: column wrap;
`


const StarsList = ({ stars }) => {
  const starNames = ['Cleanliness', 'Communication', 'Check-in', 'Accuracy', 'Location', 'Value'];
  const ratings = [stars.cleanliness, stars.communication, stars.checkin, stars.accuracy, stars.location, stars.value];
  return (
    <Wrapper>
      {starNames.map((element, index) => {
        return (<Stars key={element} starName={element} rating={ratings[index]} />);
      })}
    </Wrapper>
  );
};

export default StarsList;

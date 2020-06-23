import React from 'react';
import styled from 'styled-components';

import MainStars from './ModalMainStars.jsx';
import ModalReviewList from './ModalReviewList.jsx';
import ModalStarsList from './ModalStarsList.jsx';

const MainBox = styled.div`
  flex: 1 1 auto;
  padding: 24px;
  display: block;
  overflow: auto;
`;

const ContentBox = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 400;
  position: relative;
  margin-top: -24px;
  display: flex;
`;

const AllStars = styled.div`
  border: 0.2px solid;
  position: sticky;
  width: 33.3%;
  float: left;
  padding: 0px 8px;

`;

const AllReviews = styled.div`
  border: 0.2px solid;
  width: 58%;
  margin-left: 8.3%;
  padding: 0px 8px;
  float: left;
  position: relative;
`;

const ModalContent = ({ data }) => {
  console.log('MODAL DATA', data);
  return (
    <MainBox>
      <ContentBox>
        <AllStars>
          <MainStars stars={data.overall} number={data.reviews.length} />
          <ModalStarsList stars={data.otherStars} />
        </AllStars>
        <AllReviews>
          <ModalReviewList reviews={data.reviews} />
        </AllReviews>
      </ContentBox>
    </MainBox>
  );
};

export default ModalContent;

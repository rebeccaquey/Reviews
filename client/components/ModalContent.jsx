import React from 'react';
import styled from 'styled-components';

import OverallStars from './OverallStars.jsx';
import StarsList from './StarsList.jsx';
import ReviewList from './ReviewList.jsx';

const MainBox = styled.div`
  flex: 1 1 auto;
  padding: 24px 24px 24px 18px;
  display: block;
  max-height: 680px;
  overflow-y: scroll;
`;

const ContentBox = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 400;
  margin-top: -24px;
  display: flex;
`;

const AllStars = styled.div`
  top: -30px;
  left: 0;
  position: -webkit-sticky !important;
  position: sticky !important;
  width: 33.3%;
  height: 300px;
  padding: 0px -8px;
`;

const AllReviews = styled.div`
  /* max-height: 100%; */
  width: 58%;
  margin-left: 8.3%;
  padding: 0px 8px;
  float: left;
  position: relative;
`;

const ModalContent = ({ data }) => {
  return (
    <MainBox>
      <ContentBox>
        <AllStars>
          <OverallStars stars={data.overall} number={data.reviews.length} modal />
          <StarsList stars={data.otherStars} modal />
        </AllStars>
        <AllReviews>
          <ReviewList reviews={data.reviews} modal />
        </AllReviews>
      </ContentBox>
    </MainBox>
  );
};

export default ModalContent;

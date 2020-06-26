/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BodyStyle from './GlobalStyle.jsx';
import sampleData from './sampleData.js';
const Modal = lazy(()=> import('./Modal.jsx'));
const OverallStars = lazy(()=> import('./OverallStars.jsx'));
const MoreReviews = lazy(()=> import('./MoreReviews.jsx'));
const StarsList = lazy(()=> import('./StarsList.jsx'));
const ReviewList = lazy(()=> import('./ReviewList.jsx'));



const Wrapper = styled.div`
  padding: 48px 0px;
  max-width: 1120px;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: sampleData,
      loaded: false,
      showModal: false,
      loading: false,
    };
    this.getRoomReviews = this.getRoomReviews.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
  }

  componentDidMount() {
    this.getRoomReviews(5);
  }

  async getRoomReviews(id) {
    try {
      const response = await axios.get(`/rooms/${id}/reviews`);
      this.setState(() => ({
        reviewsData: response.data,
        loaded: true,
      }));
    } catch (err) {
      console.log(err);
    }
  }

  handleShowModal() {
    this.setState(() => ({
      showModal: true,
    }), console.log('SHOW MODAL'));
  }

  handleHideModal() {
    this.setState(() => ({
      showModal: false,
    }), console.log('HIDE MODAL'));
  }

  render() {
    // console.log('RENDER STATE', this.state);
    const { reviewsData, loaded, showModal, sixReviews } = this.state;
    return (
      <div>
        <BodyStyle modalOpened={showModal} />
        <Suspense fallback={<div>Loading...</div>}>
          <Wrapper>
            <Modal handleHideModal={this.handleHideModal} showModal={showModal} data={reviewsData}/>
            <OverallStars stars={reviewsData.overall} number={reviewsData.reviews.length} />
            <StarsList stars={reviewsData.otherStars} />
            <ReviewList reviews={reviewsData.reviews} />
            <MoreReviews number={reviewsData.reviews.length} handleShowModal={this.handleShowModal} />
          </Wrapper>
        </Suspense>
      </div>
    );
  }
}

export default App;

/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import MoreReviews from './MoreReviews.jsx';
import OverallStars from './OverallStars.jsx';
import StarsList from './StarsList.jsx';
import ReviewList from './ReviewList.jsx';
import Modal from './Modal.jsx';


const BodyStyle = createGlobalStyle`
  body {
    overflow-y: ${props => (props.modalOpened ? 'hidden' : 'auto')};
    ${'' /* overflow-x: auto; */}
  }
`;


const Wrapper = styled.div`
  padding: 48px 0px;
  max-width: 1120px;
  display: flex;
  flex-flow: column wrap;
  width: 1120px;
  height: 935px;
  
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: [],
      loaded: false,
      showModal: false,
    };
    this.getRoomReviews = this.getRoomReviews.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
  }

  componentDidMount() {
    this.getRoomReviews(3);
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

  handleHideModal(e) {
    e.stopPropagation();
    this.setState(() => ({
      showModal: false,
    }), console.log('HIDE MODAL'));
  }


  render() {
    console.log('RENDER STATE', this.state);
    const { reviewsData, loaded, showModal } = this.state;
    return (
      <div>
        <BodyStyle modalOpened={showModal} />
        <Wrapper>
          {loaded ? <Modal handleHideModal={this.handleHideModal} showModal={showModal} data={reviewsData}/> : null}
          {loaded ? <OverallStars stars={reviewsData.overall} number={reviewsData.reviews.length} /> : null}
          {loaded ? <StarsList stars={reviewsData.otherStars} /> : null}
          {loaded ? <ReviewList reviews={reviewsData.reviews} /> : null}
          {loaded ? <MoreReviews number={reviewsData.reviews.length} handleShowModal={this.handleShowModal} /> : null}
        </Wrapper>
      </div>

    );
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MoreReviews from './MoreReviews.jsx';
import OverallStars from './OverallStars.jsx';
import OtherStars from './OtherStars.jsx';
import ReviewList from './ReviewList.jsx';

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
      ReviewsData: [],
      loaded: false,
    };
    this.getRoomReviews = this.getRoomReviews.bind(this);
  }

  componentDidMount() {
    this.getRoomReviews(3);
  }

  async getRoomReviews(id) {
    try {
      const response = await axios.get(`/rooms/${id}/reviews`);
      this.setState(() => ({
        ReviewsData: response.data,
        loaded: true,
      }));
    } catch (err) {
      console.log(err);
    }
  }


  render() {
    console.log(this.state.ReviewsData);
    return (

      <Wrapper>
        <OverallStars />
        <OtherStars />
        <ReviewList />
        <MoreReviews />
      </Wrapper>

    );
  }
}

export default App;

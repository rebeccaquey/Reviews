import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MoreReviews from './MoreReviews.jsx';
import OverallStars from './OverallStars.jsx';
import StarsList from './StarsList.jsx';
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
      reviewsData: [],
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
        reviewsData: response.data,
        loaded: true,
      }));
    } catch (err) {
      console.log(err);
    }
  }


  render() {
    console.log('RENDER STATE', this.state.reviewsData);
    const { reviewsData, loaded } = this.state;
    return (

      <Wrapper>
        {loaded ? <OverallStars stars={reviewsData.overall} number={reviewsData.reviews.length} /> : null}
        {loaded ? <StarsList stars={reviewsData.otherStars} /> : null}
        {loaded ? <ReviewList reviews={reviewsData.reviews} /> : null}
        {loaded ? <MoreReviews /> : null}
      </Wrapper>

    );
  }
}

export default App;

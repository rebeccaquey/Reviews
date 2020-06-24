import React from 'react';
import moment from 'moment';
import AirbnbFont from '../fonts/fonts.js';
import ReadMoreButton from './ReadMoreButton.jsx';

import {
  Wrapper, ReviewWrapper, Customer, ImageWrapper, NameDateWrapper, DateWrapper, Content, Image, Text, ExpandedText,
} from './ReviewStyle.jsx';


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleExpanded = this.handleExpanded.bind(this);
  }

  handleExpanded() {
    console.log('Read More clicked');
    this.setState(() => ({
      expanded: true,
    }));
  }

  render() {
    
    const { review, modal } = this.props;
    const contentLength = review.content.length;
    console.log(review.name, contentLength);
    const { expanded } = this.state;
    const monthYear = moment(review.createdAt).format('MMMM YYYY');
    return (
      <Wrapper modal={modal} expanded={expanded}>
        <AirbnbFont />
        <ReviewWrapper modal={modal}>
          <Customer modal={modal}>
            <ImageWrapper>
              <Image src={review.imageUrl} alt={review.name} />
            </ImageWrapper>
            <NameDateWrapper>
              {review.name}
              <DateWrapper>
                {monthYear}
              </DateWrapper>
            </NameDateWrapper>
          </Customer>
          <Content modal={modal}>
            {expanded ? <ExpandedText>{review.content}</ExpandedText> : <Text modal={modal}>{review.content}</Text>}
            {!expanded ? <ReadMoreButton handleExpanded={this.handleExpanded} contentLength={contentLength} /> : null}
          </Content>
        </ReviewWrapper>
      </Wrapper>
    );
  }
}

export default Review;

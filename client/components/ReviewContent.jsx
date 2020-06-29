import React from 'react';
import ReadMoreButton from './ReadMoreButton.jsx';

import { Content, ExpandedText, Text } from './ReviewStyle.jsx';

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleExpanded = this.handleExpanded.bind(this);
  }

  handleExpanded() {
    this.setState(() => ({
      expanded: true,
    }));
  }

  render() {
    const { content, contentLength, modal } = this.props;
    const { expanded } = this.state;
    if (!expanded) {
      return (
        <Content modal={modal}>
          <Text modal={modal}>
            {content}
          </Text>
          <ReadMoreButton handleExpanded={this.handleExpanded} contentLength={contentLength} />
        </Content>
      );
    }
    return (
      <Content modal={modal}>
        <ExpandedText>{content}</ExpandedText>
      </Content>
    );
  }
}

export default ReviewContent;

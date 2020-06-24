import styled from 'styled-components';
//199px H
export const Wrapper = styled.div`
  height: 199px;
  width: ${props => (props.modal ? '100%' : '41%')};
  padding: 0px 8px;
  margin-right: ${props => (props.modal ? '0px' : '80px')};
`;

//h 168px
export const ReviewWrapper = styled.div`
  height: auto;
  margin-bottom: 31px;
`;

export const Customer = styled.div`
  height: 56px;
  margin-bottom: 16px;
  font-family: 'Montserrat';
  font-weight: 550;
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
`;

export const NameDateWrapper = styled.div`
  line-height: 20px;
  margin-left: 12px;
  font-size: 15px;
  color: rgb(21, 25, 27);

`;
export const DateWrapper = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: rgb(98, 96, 94);
`;

export const Content = styled.div`
  height: auto;
  font-family: 'Montserrat';
  font-weight: 400;
`;
export const Image = styled.img`
  height: 56px;
  width: 56px;
  cursor: pointer;
`;

//69px
export const Text = styled.div`
  color: rgb(21, 25, 27);
  font-size: 16px;
  line-height: 24px;
  height: 69px;  
  width: 454px;
  display: flex;
  max-width: ${props => (props.modal ? '540px' : '455px')};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; 
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ExpandedText = styled.div`
  color: rgb(21, 25, 27);
  font-size: 16px;
  line-height: 24px;
  height: auto;  
  width: 454px;
  display: flex;
  max-width: ${props => (props.modal ? '540px' : '455px')};
`



import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 32px;
  height: ${props => (props.modal ? '38px' : '27px')};
  padding-left: 8px;
  font-size: ${props => (props.modal ? '30px' : '22px')};
  font-family: 'Montserrat';
  font-weight: 550;
  line-height: ${props => (props.modal ? '36px' : '26px')};
  position: ${props => (props.modal ? 'sticky' : 'static')};
`;

export const TextSpan = styled.span`
  
`;

export const IconSpan = styled.span`
  margin-right: 8px;
`;

export const Icon = styled.img`
  max-height: ${props => (props.modal ? '38px' : '27px')};
  width: ${props => (props.modal ? '25px' : '17px')};
`;

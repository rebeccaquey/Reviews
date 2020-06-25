import { createGlobalStyle } from 'styled-components';

const BodyStyle = createGlobalStyle`
  body {
    overflow-y: ${props => (props.modalOpened ? 'hidden' : 'auto')};
  }
`;

export default BodyStyle;

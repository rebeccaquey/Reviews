import { createGlobalStyle } from 'styled-components';

import airbnbLight from './AirbnbCereal-Light.ttf';
import airbnbMedium from './AirbnbCereal-Medium.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat"), url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");
    font-style: normal;
  }
`;

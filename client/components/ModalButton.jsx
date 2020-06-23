import React from 'react';
import styled from 'styled-components';

import {
  ExitBox, ExitButton, IconSpan, Icon, SlashOne, SlashTwo,
} from './ModalButtonStyle.jsx';


const ModalButton = () => (
  <ExitBox>
    <ExitButton type="button">
      <IconSpan>
        <Icon>
          <SlashOne />
          <SlashTwo />
        </Icon>
      </IconSpan>
    </ExitButton>
  </ExitBox>
);

export default ModalButton;

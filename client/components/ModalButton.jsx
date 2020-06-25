import React from 'react';

import {
  ExitBox, ExitButton, IconSpan, Icon, SlashOne, SlashTwo,
} from './ModalButtonStyle.jsx';

const ModalButton = ({ handleHideModal }) => (
  <ExitBox>
    <ExitButton type="button" onClick={handleHideModal}>
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

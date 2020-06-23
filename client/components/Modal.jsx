import React from 'react';

import { ModalContainer, ModalBox, ModalBackground } from './ModalContainers.jsx';
import ModalButton from './ModalButton.jsx';
import TopBox from './ModalTop.jsx';
import ModalContent from './ModalContent.jsx';


const Modal = ({ handleHideModal, showModal }) => {
  if (showModal === false) {
    return null;
  }
  return (
    <ModalBackground onClick={() => handleHideModal()}>
      <ModalContainer>
        <ModalBox>
          <ModalButton />
          <TopBox />
          <ModalContent />
        </ModalBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

import React from 'react';

import { ModalContainer, ModalBox, ModalBackground } from './ModalStyle.jsx';
import ModalButton from './ModalButton.jsx';
import TopBox from './ModalTop.jsx';
import ModalContent from './ModalContent.jsx';

const Modal = ({ handleHideModal, showModal, data }) => {
  if (showModal === false) {
    return null;
  }
  return (
    <ModalBackground onClick={handleHideModal}>
      <ModalContainer>
        <ModalBox onClick={e => e.stopPropagation()}>
          <ModalButton handleHideModal={handleHideModal} />
          <TopBox />
          <ModalContent data={data} />
        </ModalBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

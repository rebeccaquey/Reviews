import React, {lazy, Suspense}from 'react';

import { ModalContainer, ModalBox, ModalBackground } from './ModalStyle.jsx';
import ModalButton from './ModalButton.jsx';
import TopBox from './ModalTop.jsx';
const ModalContent = lazy(() => import('./ModalContent.jsx'));

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
          <Suspense fallback={<div>Loading...</div>}>
            <ModalContent data={data} />
          </Suspense>
        </ModalBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default React.memo(Modal);

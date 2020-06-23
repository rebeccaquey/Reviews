import React from 'react';
import styled from 'styled-components';

import ModalButton from './ModalButton.jsx';

const ModalBackground = styled.div`
  position:fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(34,34,34, 0.7);
  height: 100vh;
  overflow: auto;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: keyframe_15p0df;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  z-index: 2000;
  position: fixed;
  padding: 40px;
  
`;

const ModalBox = styled.div`
  width: 1032px;
  max-width: 1032px;
  min-height:300px;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: keyframe_d37zz3;
  background: rgb(255, 255, 255);
  overflow: auto;
`;

const TopBox = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 72px;
  position: sticky;
  z-index: -1;
  top: 0px;
`;

const MainBox = styled.div`
  background-color: lightgray;
`;

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
          <MainBox>
            Main
          </MainBox>
        </ModalBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

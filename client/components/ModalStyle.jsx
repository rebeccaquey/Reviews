import styled from 'styled-components';

export const ModalBackground = styled.div`
  position:fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background: rgba(34,34,34, 0.7);
  overflow-y: auto;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: keyframe_15p0df;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  z-index: 2000;
  position: fixed;
  padding: 40px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  
`;

export const ModalBox = styled.div`
  width: 100%;
  max-width: 1032px;
  max-height: 100%;
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
  margin: 40px;
  top: 0px;
`;

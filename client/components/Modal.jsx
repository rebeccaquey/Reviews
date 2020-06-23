import React from 'react';
import styled from 'styled-components';

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

const ExitBox = styled.div`
  top: 24px;
  left: 24px;
  line-height: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  font-size: 14px;
  color: rgb(72, 72, 72)
`;

const ExitButton = styled.button`
  color: rgb(34, 34, 34);
  cursor: pointer;
  position: relative;
  background: transparent;
  border-color: transparent;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
  border-radius: 50%;
  display: flex;
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:hover {
    background-color: rgb(240, 242, 242);
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

const IconSpan = styled.span`
  position: relative;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
  top: 2px;
  display: block;
`

const Icon = styled.svg.attrs(() => ({ role: "presentation", viewBox: "0 0 32 32", xmlns: 'http://www.w3.org/2000/svg', }))`
  height: 16px;
  fill: none;
  width: 16px;
  stroke: rgb(34, 34, 34);
  stroke-width: 3;
  overflow: visible;
`

const SlashOne = styled.path.attrs(() => ({ d: "m6 6 20 20" }))`
  
`;

const SlashTwo = styled.path.attrs(() => ({ d: "m26 6-20 20" }))`
  
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
          <TopBox>
          Top
          </TopBox>
          <MainBox>
            Main
          </MainBox>
        </ModalBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

import styled from 'styled-components';

export const ExitBox = styled.div`
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

export const ExitButton = styled.button`
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

export const IconSpan = styled.span`
  position: relative;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
  top: 2px;
  display: block;
`;

export const Icon = styled.svg.attrs(() => ({ role: 'presentation', viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' }))`
  height: 16px;
  fill: none;
  width: 16px;
  stroke: rgb(34, 34, 34);
  stroke-width: 3;
  overflow: visible;
`;

export const SlashOne = styled.path.attrs(() => ({ d: 'm6 6 20 20' }))`
  
`;

export const SlashTwo = styled.path.attrs(() => ({ d: 'm26 6-20 20' }))`
  
`;
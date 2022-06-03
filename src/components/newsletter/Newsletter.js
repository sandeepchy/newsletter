import React from 'react';
import styled from 'styled-components';
import Details from './Details';
import SideImg from './SideImg';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(254, 193, 130);
  background: linear-gradient(
    50deg,
    rgba(254, 193, 130, 1) 20%,
    rgba(254, 160, 142, 1) 100%
  );
`;

const CardContainer = styled.div`
  margin: 8rem;
  width: 80em;
  height: 20em;
  display: flex;
  //   border-radius: 26px;
  position: relative;
  border: 2px solid #fff;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

const Newsletter = (props) => {
  return (
    <AppContainer>
      <CardContainer>
        <Details />
        <SideImg />
      </CardContainer>
    </AppContainer>
  );
};

export default Newsletter;

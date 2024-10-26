import React from 'react';
import styled from 'styled-components';

import LoadingBar from '../LoadingBar/LoadingBar';
import { Flex } from '../Flex/Flex';
import { LogoImage } from './LogoImage';

const Logo = () => {
  return (
    <Flex>
      <LogoImage />
      <Padding>
        <LoadingBar />
      </Padding>
    </Flex>
  );  
};

const Padding = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
`;
export default Logo;
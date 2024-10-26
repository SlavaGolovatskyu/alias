import React from 'react';
import styled from "styled-components";

export const LogoImage = () => {
  return <Image src="./img/test8_cropped.png" alt="logo" />;
};

const Image = styled.img`
  width: 350px;
  height: 300px;
  margin-bottom: 8px;

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 230px;
  }
`;  

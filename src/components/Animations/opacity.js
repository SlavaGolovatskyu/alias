import styled from "styled-components";

export const Animated = styled.div`
  animation: opacityAnimation 1s;

  @keyframes opacityAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
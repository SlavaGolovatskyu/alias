import React from 'react';
import styled from 'styled-components';

const LoadingBar = () => {
  return (
    <Progress>
      <ProgressBar></ProgressBar>
    </Progress>
  )
};

const Progress = styled.div`
  background-color: rgb(229,233,235);
  height: 1em;
  position: relative;
  width: 100%;
  border-radius: 8px;
`;
const ProgressBar = styled.div`
  border-radius: 8px;
  background-size: 23em 0.25em;
  height: 100%;
  position: relative;
  background-color: #743cb0;
  animation: cssload-width 1.3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
      -o-animation: cssload-width 1.3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
      -ms-animation: cssload-width 1.3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
      -webkit-animation: cssload-width 1.3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
      -moz-animation: cssload-width 1.3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
  
  @keyframes cssload-width {
    0%, 100% {
        transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    }
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
  }

  @-o-keyframes cssload-width {
      0%, 100% {
          -o-transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      0% {
          width: 0;
      }
      100% {
          width: 100%;
      }
  }

  @-ms-keyframes cssload-width {
      0%, 100% {
          -ms-transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      0% {
          width: 0;
      }
      100% {
          width: 100%;
      }
  }

  @-webkit-keyframes cssload-width {
      0%, 100% {
          -webkit-transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      0% {
          width: 0;
      }
      100% {
          width: 100%;
      }
  }

  @-moz-keyframes cssload-width {
      0%, 100% {
          -moz-transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      }
      0% {
          width: 0;
      }
      100% {
          width: 100%;
      }
  }
`;

export default LoadingBar;
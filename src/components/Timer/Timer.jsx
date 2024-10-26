import React from "react";
import styled from "styled-components";

import Button from "../Button/Button";
import { Flex } from "../Flex/Flex";

const Timer = () => {
  const timerRef = React.useRef();
  const [started, setStarted] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const [time, setTime] = React.useState(0);

  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  const play = () => {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 0.1);
    }, 100);
    setStarted(true);
    setPaused(false);
  };

  const pause = () => {
    if (paused) {
      play();
      return;
    }
    clearTimer();
    setPaused(true);
  };

  const restart = () => {
    clearTimer();
    setTime(0);
    setPaused(false);
    setStarted(false);
  }

  React.useEffect(() => {
    return clearTimer;
  }, []);

  return (
    <Flex>
      <Text>{time?.toFixed(1)} seconds</Text>
      <Flex flexdirection="row" gap="4px">
        {
          !started && (
            <Button onClick={play}>
              <Flex flexdirection="row" gap="4px">
                <Icon src="/img/icons/play.svg" alt="play" />
                Start
              </Flex>
            </Button>
          )
        }
        {
          started && (
            <>
              <Button onClick={pause}>
                <Flex flexdirection="row" gap="4px">
                  {
                    paused ? (
                      <>
                        <Icon src="/img/icons/play.svg" alt="Resume" />
                        Resume
                      </>
                    ) : (
                      <>
                        <Icon src="/img/icons/pause.svg" alt="Pause" />
                        Pause
                      </>
                    )
                  }
                </Flex>
              </Button>
              <Button onClick={restart}>
                <Flex flexdirection="row" gap="4px">
                  <Icon src="/img/icons/restart.svg" alt="restart" />
                  Restart
                </Flex>
              </Button>
            </>
          )
        }
      </Flex>
    </Flex>
  );
};

const Icon = styled.img`
  width: 13px;
  height: 13px;
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #ffffff;
`;

export default Timer;
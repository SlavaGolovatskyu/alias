import React from 'react';
import styled from 'styled-components';

import { Flex } from '../Flex/Flex';
import Button from '../Button/Button';
import { LogoImage } from '../Logo/LogoImage';
import { Animated } from 'components/Animations/opacity';

import { wordLevels } from './settings';

const MenuSelection = ({ startGame, selectedLevels, setSelectedLevels }) => {
  const onButtonClick = (clickedId) => {
    setSelectedLevels((prev) => {
      if (prev.includes(clickedId)) {
        return prev.filter((id) => id !== clickedId);
      } else {
        return [...prev, clickedId];
      }
    });
  }

  return (
    <Animated>
      <Flex>
        <LogoImage />
        <Flex flexdirection="row" flexwrap="wrap" gap="8px">
          {
            wordLevels.map((level) => {
              return (
                <Button
                  key={level.id}
                  selected={selectedLevels.includes(level.id)}
                  onClick={() => onButtonClick(level.id)}
                >
                  {level.name}
                </Button>
              )
            })
          }
        </Flex>
        <Text>
          Welcome! We're happy you ended up here.<br/>
          By clicking on above buttons, you can <Highlight>choose multiple levels</Highlight> that will be used during the game.
          For instance, you <Highlight>click on "A1-A2"</Highlight> then we'll show words <Highlight>according to this level</Highlight>.
          If you decide to include <Highlight>Idioms or Fixed Phrases</Highlight> in your game, we'll show what <Highlight>fits selected English level</Highlight>.
          And opposite, if you decide <Highlight>not to select English level</Highlight>, we'll randomly show Idioms/Fixed phrases <Highlight>of all levels</Highlight>.<br/>
          The game starts right after clicking on "Start" button. Once game's started you should explain as many words as you wish to your friends, there're no limitations on time or words.
        </Text>
        <Button onClick={startGame}>
          <Flex flexdirection="row" gap="4px">
            <Icon src="/img/icons/play.svg" alt="play" />
            Start
          </Flex>
        </Button>
      </Flex>
    </Animated>
  );
};

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #ffffff;
  text-align: center;
`;

const Highlight = styled.strong`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: yellow;
`;
const Icon = styled.img`
  width: 13px;
  height: 13px;
`;

export default MenuSelection;
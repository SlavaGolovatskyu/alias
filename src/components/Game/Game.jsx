import React from 'react';
import styled from 'styled-components';

import { Flex } from '../Flex/Flex';
import { LogoImage } from '../Logo/LogoImage';
import Timer from '../Timer/Timer';
import { Animated } from 'components/Animations/opacity';
import Button from 'components/Button/Button';

import { getRandomWord } from 'helpers/getRandomWord';
import { getAllWords } from 'helpers/getAllWords';

const Game = ({ selectedLevels }) => {
  const [currentWord, setCurrentWord] = React.useState({});
  const [words, setWords] = React.useState([]);

  const allWords = React.useMemo(() => {
    return getAllWords(selectedLevels);
  }, [selectedLevels]);

  const previousWord = () => {
    setCurrentWord((prev) => {
      return {
        word: words[prev.wordIndex - 1],
        wordIndex: prev.wordIndex - 1,
      };
    });
  }

  const nextWord = () => {
    const newWord = getRandomWord(allWords);

    setWords((prev) => {
      const newValue = [...prev, newWord];

      setCurrentWord((prev) => {
        return {
          word: words[prev.wordIndex + 1],
          wordIndex: prev.wordIndex + 1,
        }
      });

      return newValue;
    });
  }

  React.useEffect(() => {
    setWords((prev) => {
      const currentWord = getRandomWord(allWords);

      setCurrentWord({
        word: currentWord,
        wordIndex: 0,
      });

      return [
        ...prev,
        currentWord,
        getRandomWord(allWords),
        getRandomWord(allWords),
        getRandomWord(allWords)
      ];
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Animated>
      <Flex>
        <LogoImage />
        <Timer />
        <WordsContainer>
          <Word>
            {
              words[currentWord.wordIndex]
            }
          </Word>
          <NextWord>
            {
              words[currentWord.wordIndex + 1]
            }
          </NextWord>
          <NextWord>
            {
              words[currentWord.wordIndex + 2]
            }
          </NextWord>
          <NextWord>
            {
              words[currentWord.wordIndex + 3]
            }
          </NextWord>
        </WordsContainer>
        <ContainerButton>
          <Button disabled={currentWord.wordIndex === 0} onClick={previousWord}>
            <Flex flexdirection="row" gap="4px">
              <Icon src="./img/icons/previous.svg" alt="previous" />
              Previous
            </Flex>
          </Button>
          <Button onClick={nextWord}>
            <Flex flexdirection="row" gap="4px">
            <Icon src="./img/icons/next.svg" alt="next" />
              Next
            </Flex>
          </Button>
        </ContainerButton>
      </Flex>
    </Animated>
  );
};

const WordsContainer = styled.div`
  margin-top: 20px;
  min-width: 224px;
  max-width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  min-height: 70px;
`;
const Word = styled.p`
  padding: 10px 2px;
  margin: 0;
  font-size: 18px;
  text-align: center;
  background: #f26970;
  color: #ffffff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const NextWord = styled(Word)`
  background: transparent;
  color: black;
`;
const Icon = styled.img`
  width: 13px;
  height: 13px;
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  gap: 8px;
`;

export default Game;
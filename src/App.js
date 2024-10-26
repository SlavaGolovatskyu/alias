import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Logo from './components/Logo/Logo';
import MenuSelection from './components/MenuSelection/MenuSelection';
import Game from './components/Game/Game';
import { showError } from './components/Toast/Toast';

import { useLoading } from './hooks/useLoading';
import { STEPS } from './settings';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Btn } from 'components/Button/Button';

function App() {
  const [selectedLevels, setSelectedLevels] = React.useState([]);
  const [currentStep, setCurrentStep] = React.useState(STEPS.LOADING);

  const startGame = () => {
    if (selectedLevels.length === 0) {
      showError('You can not start the game without selected levels');
      return;
    }

    setCurrentStep(STEPS.GAME);
  };

  const screen = () => {
    if (currentStep === STEPS.LOADING) return <Logo />;
    if (currentStep === STEPS.MENU) {
      return (
        <MenuSelection
          selectedLevels={selectedLevels}
          setSelectedLevels={setSelectedLevels}
          startGame={startGame}
        />
      );
    }
    if (currentStep === STEPS.GAME) {
      return <Game selectedLevels={selectedLevels} />
    }
  };

  useLoading(setCurrentStep, 1200, STEPS.MENU);

  return (
    <>
      <div className="App">
        {screen()}
      </div>
      <ToastContainer />
      <AbsoluteContainer isShown={currentStep === STEPS.GAME}>
        <BackButton onClick={() => setCurrentStep(STEPS.MENU)}>
          <Icon src="/img/icons/back_home.svg" />
        </BackButton>
      </AbsoluteContainer>
    </>
  );
}

const BackButton = styled(Btn)`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
`;
const AbsoluteContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  display: none;

  ${({ isShown }) => isShown && `
    display: block;
  `}
`;

export default App;

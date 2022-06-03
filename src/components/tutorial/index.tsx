import { styled } from '@stitches/react';
import { useState } from 'react';

import t1 from './tutorial1.png';
import t2 from './tutorial2.png';
import t3 from './tutorial3.png';
import t4 from './tutorial4.png';

const Div = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',

  zIndex: '50',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '#ff6395',

  '& div': {
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  '& div > img': {
    width: '300px',
    marginBottom: '20px',
  },

  '& button': {
    fontFamily: 'Carter One',

    border: 'none',

    margin: '0 5px',

    fontSize: '1.5em',

    background: '#d64170',
    color: 'white',

    width: '60px',
    height: '60px',

    borderRadius: '23px',
    marginBottom: '20px',

    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },

  '& button:hover': {
    background: '#b92e5a',
  },
});

const images = [t1, t2, t3, t3, t4];

interface ITutorial {
  state: React.Dispatch<React.SetStateAction<boolean>>;
}

function Tutorial(props: ITutorial) {
  const [currentCard, setCurrentCard] = useState(t1);
  const [counter, setCounter] = useState(0);

  return (
    <Div>
      <div className="flex">
        <img src={currentCard} alt="" />
        <div>
          <button
            onClick={() => {
              props.state(false);
            }}
          >
            X
          </button>
          <button
            onClick={() => {
              if (counter != 0) {
                let newCounterValue = counter - 1;
                setCounter(newCounterValue);
                setCurrentCard(images[newCounterValue]);
              }
            }}
          >
            {'<'}
          </button>
          <button
            onClick={() => {
              if (counter < 4) {
                let newCounterValue = counter + 1;
                setCounter(newCounterValue);
                setCurrentCard(images[newCounterValue]);
              }
            }}
          >
            {'>'}
          </button>
        </div>
      </div>
    </Div>
  );
}

export default Tutorial;

import { useState } from 'react';
import {
  formatScore,
  generateCard,
  generateHand,
} from './actions/generateHand';

import Card from './components/card';
import Computer from './components/computer';
import HitButton from './components/hitButton';
import StandButton from './components/standButton';
import Tutorial from './components/tutorial';
import Wallet from './components/wallet';
import WinnerCard from './components/winnerCard';
import globalStyles from './globalStyles';

import { Player } from './types';

globalStyles();

function App() {
  const [tutorial, openTutorial] = useState(false);

  const [player, setPlayer] = useState<Player>({
    name: 'player',
    score: 0,
    deck: [],
  });

  const [wallet, setWallet] = useState(200);

  const [pc, setPc] = useState<Player>({
    name: 'dealer',
    score: 0,
    deck: [],
  });

  const [winner, setWinner] = useState({
    winner: '',
    state: false,
  });

  generateHand(player);
  generateHand(pc);

  return (
    <>
      {tutorial ? <Tutorial state={openTutorial}></Tutorial> : null}
      <div className="container">
        {winner.state ? (
          <div className="flex">
            <WinnerCard winner={winner.winner}></WinnerCard>
          </div>
        ) : (
          <div className="flex">
            <Computer></Computer>
            <div>
              <div
                onClick={() => {
                  openTutorial(true);
                }}
                className="balloon"
              >
                {' '}
                how to play?
              </div>
              <Wallet wallet={wallet}></Wallet>
            </div>
          </div>
        )}

        <div className="deck">
          {pc.deck.map((card) => {
            let cardHidden = true;
            pc.deck.length == 3 ? (cardHidden = false) : (cardHidden = true);
            return <Card card={card} cardHidden={cardHidden}></Card>;
          })}
          <h1>
            {pc.deck.length == 2
              ? formatScore(Number(pc.deck[0][1]))
              : pc.score}
          </h1>
        </div>
        <div className="deck">
          {player.deck.map((card) => {
            return <Card card={card}></Card>;
          })}
          <h1>{player.score}</h1>
        </div>
        <div className="flex">
          <HitButton
            onClick={() => {
              if (player.deck.length == 2) {
                const prevPcDeck = pc.deck;
                const pcCard = generateCard();
                prevPcDeck.push(pcCard);
                const newPcScore = pc.score + formatScore(Number(pcCard[1]));
                setPc({ ...pc, deck: prevPcDeck, score: newPcScore });

                const prevPlayerDeck = player.deck;
                const playerCard = generateCard();
                const newPlayerScore =
                  player.score + formatScore(Number(playerCard[1]));
                prevPlayerDeck.push(playerCard);
                setPlayer({
                  ...player,
                  deck: prevPlayerDeck,
                  score: newPlayerScore,
                });

                let whoWin;

                if (newPlayerScore == 21) {
                  setPlayer({
                    ...player,
                    score: newPlayerScore,
                  });
                  setWallet(wallet + 10);
                  whoWin = 'player';
                } else if (newPcScore == 21) {
                  setPlayer({
                    ...player,
                    score: newPlayerScore,
                  });
                  setWallet(wallet - 10);
                  whoWin = 'pc';
                } else if (newPlayerScore > 21) {
                  setPlayer({
                    ...player,
                    score: newPlayerScore,
                  });
                  setWallet(wallet - 10);

                  whoWin = 'pc';
                } else if (newPcScore > 21 && newPlayerScore < 21) {
                  setPlayer({
                    ...player,
                    score: newPlayerScore,
                  });
                  setWallet(wallet + 10);
                  whoWin = 'player';
                } else if (newPcScore > newPlayerScore) {
                  setPlayer({
                    ...player,
                    score: newPlayerScore,
                  });

                  setWallet(wallet - 10);
                  whoWin = 'pc';
                } else {
                  setPlayer({
                    ...player,
                    score: newPlayerScore,
                  });
                  setWallet(wallet + 10);
                  whoWin = 'player';
                }

                setWinner({
                  winner: whoWin,
                  state: true,
                });

                setTimeout(() => {
                  setPlayer({
                    ...player,
                    deck: [],
                    score: 0,
                  });
                  setPc({ ...pc, deck: [], score: 0 });

                  setWinner({
                    winner: '',
                    state: false,
                  });
                }, 2500);
              }
            }}
          ></HitButton>
          <StandButton
            onClick={() => {
              if (player.deck.length == 2) {
                const prevPcDeck = pc.deck;
                const pcCard = generateCard();
                prevPcDeck.push(pcCard);
                const newPcScore = pc.score + formatScore(Number(pcCard[1]));
                setPc({ ...pc, deck: prevPcDeck, score: newPcScore });

                if (newPcScore == 21) {
                  setWinner({
                    winner: 'pc',
                    state: true,
                  });
                } else if (newPcScore > 21) {
                  setWinner({
                    winner: 'player',
                    state: true,
                  });
                } else if (newPcScore > player.score) {
                  setWinner({
                    winner: 'pc',
                    state: true,
                  });
                } else {
                  setWinner({
                    winner: 'player',
                    state: true,
                  });
                }

                setTimeout(() => {
                  setPlayer({
                    ...player,
                    deck: [],
                    score: 0,
                  });
                  setPc({ ...pc, deck: [], score: 0 });

                  setWinner({
                    winner: '',
                    state: false,
                  });
                }, 2500);
              }
            }}
          ></StandButton>
        </div>
      </div>
    </>
  );
}

export default App;

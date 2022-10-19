import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../entities/card";

function Game() {

  // if the player has not made the first move, the counter should not work
  const [gameStarted, setGameStarted] = useState(false);

  // players deck
  const [dealerDeck, setDealerDeck] = useState<Card[]>([]);
  const [yourDeck, setYourDeck] = useState<Card[]>([]);

  // players sum
  const [dealerSum, setDealerSum] = useState(0);
  const [yourSum, setYourSum] = useState(0);

  // timer for move
  const [seconds, setSeconds] = useState(0);
  // mostrar/ esconder o timer no html
  const [stopLoading, setStopLoading] = useState(true);
  // timeoutFunction
  var timer: number;

  // user can play
  const [canPlay, setCanPlay] = useState(true);

  // clonar o deck para nao mostrar a carta virada
  const cloneDeck = [...dealerDeck];
  const hiddenScore = cloneDeck;

  // define a winner
  const [winner, setWinner] = useState<'dealer' | 'you' | 'tie' | ''>('');

  // start game / deal cards
  useEffect(() => {
    if (dealerDeck.length < 2 && yourDeck.length < 2) {
      setDealerSum(buildDeck(dealerDeck));
      setYourSum(buildDeck(yourDeck));
    }
  }, [winner]);

  // verifica se o dealer ainda possui movimentos
  if (!canPlay && winner == '') {
    setTimeout(() => {
      dealerPlay();
    }, 1000);
  }

  // timer para caso o jogador demore 6 segundos para jogar
  useEffect(() => {
    if (canPlay && gameStarted) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000)

      setStopLoading(true);
      if (seconds >= 6) {
        clearInterval(timer);
        setStopLoading(false);

        setCanPlay(false);
        setTimeout(() => {
          dealerPlay();
        }, 1000);
      }

      if (yourSum >= 21) {
        setStopLoading(false);
        setSeconds(10);
      }
      return () => clearInterval(timer);
    }

  }, [seconds, gameStarted]);

  // caso o jogador decida nao comprar cartas
  const stay = () => {
    if (canPlay) {
      clearInterval(timer);
      setSeconds(10);

      setCanPlay(false);
      setStopLoading(false);
    } else {
      console.log('you cant play')
    }
  }

  // pedir carta caso consiga jogar
  const hit = () => {
    if (canPlay) {
      clearInterval(timer);
      setSeconds(10);

      gameStarted ? null : setGameStarted(true);

      if (yourSum < 21) {
        const card = new Card();
        const newDeck = yourDeck;
        const newSum = yourSum + card.value;
        newDeck.push(card);

        setYourSum(newSum)
        setYourDeck(newDeck);

        setSeconds(0);
        setStopLoading(false);
      }
    } else {
      console.log('you cant play')
    }
  }

  // jogada do dealer
  function dealerPlay() {
    if (yourSum === 21 && dealerSum < 21) {
      dealerHit() ? '' : setWinner("you");
    }
    else if (dealerSum === 21 && yourSum < 21) {
      setWinner("dealer");
    }
    else if (dealerSum === 21 && yourSum === 21 || yourSum === dealerSum) {
      dealerHit() ? '' : setWinner("tie");
    }
    else if (dealerSum > 21 && yourSum < dealerSum) {
      setWinner("you");
    }
    else if (yourSum > 21 && dealerSum < yourSum) {
      setWinner("dealer");
    }
    else if (dealerSum < yourSum) {
      dealerHit() ? '' : setWinner("you");
    }
    else if (yourSum < dealerSum) {
      setWinner("dealer");
    }
  }

  // formar baralho inicial
  function buildDeck(deck: Card[]): number {
    let sum = 0;

    for (let index = 0; index < 2; index++) {
      const card = new Card;
      sum = sum + card.value;
      deck.push(card);
    }
    return sum;
  }

  // pedir carta para o dealer
  function dealerHit() {
    if (dealerSum < 16) {
      const card = new Card();
      const newDeck = dealerDeck;
      const newSum = dealerSum + card.value;
      newDeck.push(card);

      setDealerSum(newSum)
      setDealerDeck(newDeck);

      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="w-96 max-w-sm h-screen flex items-center flex-col">

      <a className="text-2xl text-secondary antialiased underline text-center mt-6" target={"_blank"} href="https://github.com/erickctra">https://github.com/erickctra</a>

      {/* dealer hand */}
      <div id="dealerHand" className="flex justify-center mt-14 relative scale-[0.8] flex-wrap w-[300px]">
        <h1 className={`text-3xl text-primary absolute -top-8 -right-10 ${winner == 'you' ? 'line-through' : ''} `}>{!canPlay ? dealerSum : hiddenScore.pop()?.value}</h1>

        {dealerDeck.map((card, index) => {
          if (canPlay) {
            const hidden = index == 0 ? "bg-[url('/src/assets/cards/cardBack.png')] -rotate-6 -mt-3" : "bg-[url('/src/assets/cards/card.png')]";
            return <div key={index} className={`flex justify-center items-center text-4xl text-[#6D5C5C]  bg-cover w-24 h-36 -ml-6 ${hidden}`}>{index != 0 ? card.figure : ''}</div>
          } else {
            const sendToAbove = index > 2 ? `absolute left-${index > 3 ? 12 : 6} top-28` : '';
            const animateNewCard = index > 1 ? 'animate-getCard' : '';
            return <div key={index} className={`flex justify-center items-center text-4xl text-[#6D5C5C] bg-[url('/src/assets/cards/card.png')] bg-cover w-24 h-36 -ml-6 ${animateNewCard} ${sendToAbove}`}>{card.figure}</div>
          }
        })}
      </div>

      <div className="bg-[url('/src/assets/cards/dealerShadow.png')] bg-inherit bg-no-repeat w-40 h-4 mt-10"></div>

      {/* your hand */}
      <div id="playerHand" className="flex justify-center mt-14 relative scale-[0.7] flex-wrap w-[350px]">
        <h1 className={`text-3xl text-primary absolute -top-8 -right-10 ${winner == 'dealer' ? 'line-through' : ''}`}>{yourSum}</h1>

        {yourDeck.map((card, index) => {
          const sendToAbove = index > 2 ? `absolute sendToAbove -bottom-32` : '';
          return <div key={index} className={`flex justify-center items-center text-6xl text-[#6D5C5C] bg-[url('/src/assets/cards/card.png')] bg-cover w-32 h-48 -ml-6 animate-getCard -rotate-2 ${sendToAbove}`}>{card.figure}</div>
        })}

        {yourSum > 21 ? <h1 className="text-red-500 text-4xl absolute top-0 z-50 animate-getAlert">exceeded</h1> : null}
        {winner != '' ? <h1 className="text-primary text-4xl absolute -top-10  z-50 animate-getAlertWinner">{winner} {winner == 'tie' ? '' : 'win'} {winner == 'you' ? ':)' : ':('}</h1> : null}

      </div>

      <div className="bg-[url('/src/assets/cards/yourShadow.png')] bg-inherit bg-no-repeat w-60 h-10 mt-10 relative scale-[0.8] md:scale-100 -z-50"></div>

      {/* Game Controls */}
      <div className="mt-14">
        <div className="w-full h-[6px] rounded-full bg-shadow mb-4 relative">
          {stopLoading && yourDeck.length > 2 ? (
            <div className="absolute top-0 bottom-0 bg-primary animate-actionLoader"></div>
          ) : ''}
        </div>

        {winner != '' ? (
          <div><button onClick={() => {
            setDealerDeck([]);
            setYourDeck([]);

            setDealerSum(0);
            setYourSum(0);

            setCanPlay(true);
            setWinner('');
          }} className="text-2xl w-64 h-14 rounded-md bg-primary text-bg">Play again</button> <br /></div>
        ) : (
          <div >
            <button onClick={hit} className={`text-3xl w-44 h-14 rounded-md ${canPlay && yourSum < 21 ? 'bg-primary text-bg' : 'bg-shadow text-secondary'} transition-colors`}>hit</button>
            <button onClick={stay} className={`text-3xl w-20 h-14 ${canPlay && yourSum <= 21 ? 'bg-b-secondary text-bg' : 'bg-shadow text-secondary'} transition-colors rounded-md ml-4`}>stay</button>
          </div>
        )}
        <Link className="text-2xl text-secondary underline mt-8" to={"/help"}>how to play</Link>
      </div>

    </div>
  )
}

export default Game

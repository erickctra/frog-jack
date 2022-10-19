import { Link } from "react-router-dom";

import help1 from "../assets/help/helpFile1.png"
import help2 from "../assets/help/helpFile2.png"

export function Help() {
  return (
    <div className="w-96 mt-[10vh] max-w-sm h-auto flex flex-col box-border px-8 py-28">
      <h1 className="text-3xl text-start text-primary">How to play</h1>
      <p className="text-2xl leading-4 text-slate-500 mt-4">the objective of the game is to get a set of cards in which the sum must be 21.
        Or you can get as close as possible without bursting</p>

      <p className="text-2xl leading-4 text-slate-500 mt-4">if you go over 21, you lose, if the dealer has 21 or less and you have less points than the dealer, you lose.</p>


      <img src={help1} alt="" />

      <p className="text-2xl leading-4 text-slate-500 mt-8">the numbered cards correspond to their respective value.</p>
      <p className="text-2xl leading-4 text-slate-500 mt-4">the cards with letters, the situation changes a little,
        J, Q and K cards are worth 10 points.</p>
      <p className="text-2xl leading-4 text-slate-500 mt-4">but "A" card has a value of 1.</p>

      <h1 className="text-3xl text-start text-primary mt-8">Hit and Stay</h1>
      <p className="text-2xl leading-4 text-slate-500 mt-4">when you start the game, you will decide if you want more cards, or if you want to keep the amount you received.</p>
      <p className="text-2xl leading-4 text-slate-500 mt-4">
        if you want to take more cards, it may happen that you exceed the score of 21, if that happens you will lose because the dealer will not ask for cards.</p>
      <p className="text-2xl leading-4 text-slate-500 mt-4">but, if you still haven't exceeded, a timer will appear for you to play in up to 6 seconds, if you don't do anything, you will lose your turn (stay).</p>

      <img src={help2} alt="" />

      <Link className="fixed bottom-10 right-10 flex items-center justify-center text-2xl w-28 h-12 rounded-md bg-primary text-bg" to={'/game'} >Return</Link>
    </div>


  )
}
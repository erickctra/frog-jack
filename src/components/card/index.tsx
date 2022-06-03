import { keyframes, styled } from '@stitches/react';

import cardSprite from './CuteCards.png';

interface ICardProps {
  card: any[];
  cardHidden?: boolean;
}

const moveFromRight = keyframes({
  '0%': { marginLeft: '40px', opacity: '0' },
  '100%': { marginLeft: '-40px', opacity: '1' },
});

const Span = styled('button', {
  border: '0',
  outline: '0',

  width: '100px',
  height: '144px',

  maxWidth: '100px',

  background: `url(${cardSprite})`,

  '& + button': {
    animation: `${moveFromRight} 200ms forwards`,
  },

  variants: {
    suit: {
      spades: {
        backgroundPositionY: 'calc(-144px * 2) !important',
      },
      hearts: {
        backgroundPositionY: 'calc(-144px * 3) !important',
      },
      clubs: {
        backgroundPositionY: '0 !important',
      },
      diamonds: {
        backgroundPositionY: 'calc(-144px) !important',
      },
    },
    cardHidden: {
      true: {
        '& + button': {
          marginLeft: '-40px',
          backgroundPosition: 'calc(-100px * 14) calc(-144px * 2) !important',
        },
      },
    },
  },
});

function Card(props: ICardProps) {
  return (
    <Span
      suit={props.card[0]}
      cardHidden={props.cardHidden}
      style={{
        backgroundPositionX: `${-100 * props.card[1] + 100}px`,
      }}
    ></Span>
  );
}

export default Card;

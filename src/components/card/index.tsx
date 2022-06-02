import { styled } from '@stitches/react';
import cardSprite from './CuteCards.png';

const Span = styled('button', {
  border: '0',
  outline: '0',

  width: '100px',
  height: '144px',

  maxWidth: '100px',

  background: `url(${cardSprite})`,

  '& + button': {
    marginLeft: '-40px',
  },
});

function Card() {
  return <Span></Span>;
}

export default Card;

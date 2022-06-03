import { styled } from '@stitches/react';

import chips from './PokerChips.png';

const ChipsImage = styled('div', {
  width: '36px',
  height: '36px',

  marginLeft: '10px',

  background: `url(${chips})`,
  backgroundSize: '190px',
});

function Chips() {
  return <ChipsImage></ChipsImage>;
}

export default Chips;

import { styled } from '@stitches/react';
import Chips from '../chips';

import chips from './PokerChips.png';

interface IWallet {
  wallet: number;
}

const Div = styled('div', {
  marginTop: '15px',

  width: '130px',
  height: '60px',

  background: '#E54C7E',

  display: 'flex',
  alignItems: 'center',

  borderRadius: '12px',

  '& > h1': {
    fontSize: '1.3em',
  },
});

function Wallet(props: IWallet) {
  return (
    <Div>
      <Chips></Chips>
      <h1>{props.wallet}</h1>
    </Div>
  );
}

export default Wallet;

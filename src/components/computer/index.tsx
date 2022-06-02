import { styled } from '@stitches/react';
import pcAvatar from './pcArt.png';

const ComputerAvatar = styled('div', {
  width: '128px',
  height: '163px',

  background: `url(${pcAvatar})`,
});

function Computer() {
  return <ComputerAvatar></ComputerAvatar>;
}

export default Computer;

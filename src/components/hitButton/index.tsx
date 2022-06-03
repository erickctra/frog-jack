import { styled } from '@stitches/react';

interface IHitButton {
  onClick?: () => void;
}

const Button = styled('button', {
  border: 'none',
  borderRadius: '23px',

  width: '180px',
  height: '70px',

  backgroundColor: '#150000',
  color: '#fff',

  fontSize: '1.3em',

  transition: 'background-color 200ms ease-in-out',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#250606',
  },
});

function HitButton(props: IHitButton) {
  return <Button onClick={props.onClick}>Hit</Button>;
}

export default HitButton;

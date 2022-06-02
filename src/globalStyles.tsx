import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },

  body: {
    backgroundColor: '#ff6395',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    height: '100vh',
  },

  '.container': {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  '.flex': {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },

  '.flex + .deck': {
    marginTop: '30px',
  },

  '.deck': {
    marginBottom: '20px',
    marginLeft: '10px',
  },

  '.balloon': {
    position: 'relative',
    width: '150px',
    height: '110px',

    backgroundColor: '#FFFEF8',

    borderRadius: '23px',
  },

  '.balloon:before': {
    content: '""',
    borderStyle: 'solid',
    borderWidth: '10px 15px 10px 0',
    borderColor: 'transparent #FFFEF8 transparent transparent',
    position: 'absolute',
    left: '-14px',
    top: '40px',
  },
});

export default globalStyles;

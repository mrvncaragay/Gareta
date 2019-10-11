// Palette
import palette from '../palette';

export default {
  root: {
    borderRadius: 'none'
  },

  outlined: {
    letterSpacing: '0.15em',
    padding: '10px 32px 10px 32px',
    color: 'white',
    border: '1px solid white',

    '&:hover': {
      backgroundColor: 'white',
      color: palette.text.primary
    }
  },

  contained: {
    letterSpacing: '0.1em',
    padding: '10px 32px 10px 32px',
    boxShadow: 'none',
    backgroundColor: '#4285F4 !important'
  }
};

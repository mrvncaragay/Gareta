// Palette
import palette from '../palette';

export default {
  root: {
    borderRadius: 'none',
    marginRight: '16px'
  },

  outlined: {
    backgroundColor: palette.text.primary,
    letterSpacing: '0.15em',
    padding: '10px 24px 10px 24px',
    color: 'white',

    '&:hover': {
      backgroundColor: 'white',
      color: palette.text.primary
    }
  },

  contained: {
    letterSpacing: '0.1em',
    padding: '10px 24px 10px 24px'
  },

  label: {
    fontSize: '16px'
  }
};

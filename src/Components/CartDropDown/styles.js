import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    position: 'absolute',
    width: '240px',
    height: '340px',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    border: `1px solid ${theme.palette.text.primary}`,
    backgroundColor: 'white',
    top: '100px',
    right: '40px',
    zIndex: '5',

    '& a, & button ': {
      width: '100%',
      marginTop: 'auto',
      marginRight: 0
    }
  },

  empty: {
    overflow: 'hidden',
    marginTop: '20%',
    alignSelf: 'center'
  },

  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto'
  }
}));

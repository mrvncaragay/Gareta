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

    '& button': {
      marginTop: 'auto',
      marginRight: 0
    }
  },

  cartItems: {
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll'
  }
}));

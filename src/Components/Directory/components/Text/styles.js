import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',

    '& h1, h2, h3, h4': {
      color: 'white'
    },

    '& h1': {
      fontSize: '48px',
      margin: theme.spacing(0, 0, 2, 0)
    }
  }
}));

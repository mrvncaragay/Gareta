import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    height: '80px',
    marginBottom: '15px',

    '& img': {
      width: '30%'
    }
  },

  itemDetails: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: theme.spacing(2)
  }
}));

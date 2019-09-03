import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    height: theme.spacing(9),
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 3)
  },

  logo: {
    height: '100%',
    width: '50px',
    padding: theme.spacing(0, 3, 3, 3)
  },

  options: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(4)
  },

  option: {
    padding: theme.spacing(1, 2)
  }
}));

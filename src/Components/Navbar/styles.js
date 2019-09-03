import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    height: theme.spacing(9),
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(6, 6)
  },

  logo: {
    height: '100%',
    width: '50px',
    padding: theme.spacing(0, 3, 3, 0)
  },

  options: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  option: {
    padding: theme.spacing(1, 2),

    '&:last-child': {
      paddingRight: 0
    }
  }
}));

import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    height: theme.spacing(9),
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(6, 6, 2, 6),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2, 3, 1, 3)
    }
  },

  logo: {
    height: '100%',
    width: '50px',
    padding: theme.spacing(0, 3, 3, 0),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0)
    }
  },

  options: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },

  option: {
    padding: theme.spacing(1, 2),

    '&:last-child': {
      paddingRight: 0
    }
  }
}));

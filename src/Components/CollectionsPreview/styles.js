import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px'
  },

  title: {
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(1)
    }
  },

  preview: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: theme.spacing(1)
    }
  }
}));

import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {},

  items: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: theme.spacing(1),

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr'
    }
  },

  title: {
    marginBottom: '32px',

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(1)
    }
  }
}));

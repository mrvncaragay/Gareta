import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },

  items: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: theme.spacing(1)
  }
}));

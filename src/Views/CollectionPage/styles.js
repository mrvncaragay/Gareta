import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  items: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: theme.spacing(1)
  }
}));

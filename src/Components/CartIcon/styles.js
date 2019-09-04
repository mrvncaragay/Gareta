import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    cursor: 'pointer',

    '& svg': {
      width: '30px',
      height: '30px',
      color: theme.palette.text.primary
    }
  }
}));

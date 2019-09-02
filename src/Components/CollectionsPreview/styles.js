import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px'
  },

  title: {
    marginBottom: '25px'
  },

  preview: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

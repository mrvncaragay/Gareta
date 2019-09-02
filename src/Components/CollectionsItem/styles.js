import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    width: '22%',
    display: 'flex',
    flexDirection: 'column',
    height: '350px',
    alignItems: 'center'
  },

  image: {
    width: '100%',
    height: '95%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: theme.spacing(1)
  },

  footer: {
    width: '100%',
    height: '5%',
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

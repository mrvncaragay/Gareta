import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: '100px',
    position: 'relative',
    opacity: 0,
    top: '50px',
    height: props => props.height
  }
}));

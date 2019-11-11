import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    height: '100%',
    width: props => (props.width ? `${props.width}%` : `100%`),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    [theme.breakpoints.down('md')]: {
      height: '200px',

      '&.large': {
        height: '200px'
      }
    }
  },

  backgroundImage: {
    // Image style
    height: '100%',
    width: '100%',
    backgroundSize: 'cover'
  }
}));

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
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    height: '100%',

    '&:first-child': {
      marginRight: '50px'
    }
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(6, 0, 4, 0),

    '& h1': {
      fontSize: '30px',
      fontFamily: 'serif',
      textTransform: 'none'
    }
  },

  actions: {
    display: 'flex',
    justifyContent: 'center',

    '& button': {
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.text.primary}`,

      '&:first-child': {
        marginRight: theme.spacing(1)
      },

      '&:hover': {
        backgroundColor: theme.palette.text.primary,
        color: 'white'
      }
    }
  }
}));

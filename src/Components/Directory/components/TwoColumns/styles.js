import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',

    '&:first-child': {
      marginRight: '50px'
    }
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(4, 0, 2, 0),

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

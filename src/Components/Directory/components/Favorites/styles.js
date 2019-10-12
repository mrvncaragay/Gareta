import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    opacity: 0,
    top: '50px',
    height: props => props.height,

    '& a': {
      position: 'absolute'
    }
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    '& h1': {
      fontSize: '40px'
    }
  },

  body: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: 3
  },

  action: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& a': {
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
  }
}));

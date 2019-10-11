import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    minWidth: '30%',
    height: 'auto',
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: theme.spacing(0, 1, 2, 2),
    overflow: 'hidden',

    // '&.large': {
    //   height: '380px'
    // },

    // '&:first-child': {
    //   marginRight: theme.spacing(1)
    // },

    // '&:last-child': {
    //   marginLeft: theme.spacing(1)
    // },

    '&:hover': {
      cursor: 'pointer',

      '& $backgroundImage': {
        transform: 'scale(1.1)',
        transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
      },

      '& $content': {
        backgroundColor: 'white',

        '& h3': {
          color: theme.palette.text.primary
        }
      }
    },

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
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },

  content: {
    height: '50px',
    padding: theme.spacing(0, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid white',
    position: 'absolute',

    '& h3': {
      color: 'white'
    }
  }
}));

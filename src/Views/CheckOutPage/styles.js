import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    width: '55%',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px auto 0',
    marginBottom: '50px',

    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      width: '90%'
    },

    '& button': {
      marginLeft: 'auto'
    }
  },

  checkOutHeader: {
    width: '100%',
    padding: theme.spacing(1, 0),
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.text.secondary}`
  },

  headerBlock: {
    textTransform: 'capitalize',
    width: '23%',

    '&:last-child': {
      width: '8%',

      [theme.breakpoints.down('md')]: {
        width: '11%'
      }
    },

    '& span': {
      [theme.breakpoints.down('md')]: {
        fontSize: '12px'
      }
    }
  },

  total: {
    marginTop: '30px',
    marginLeft: 'auto',
    fontSize: '36px'
  },

  testWarning: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '24px',
    color: 'red'
  }
}));

import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    width: '55%',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px auto 0'
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
      width: '8%'
    }
  },

  total: {
    marginTop: '30px',
    marginLeft: 'auto',
    fontSize: '36px'
  }
}));

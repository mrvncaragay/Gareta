import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    minHeight: '100px',
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    padding: theme.spacing(2, 0),
    alignItems: 'center',

    '& span': {
      width: '23%',

      [theme.breakpoints.down('md')]: {
        fontSize: '12px'
      }
    }
  },

  img: {
    width: '20%',
    marginRight: theme.spacing(3.2),
    height: '130px',

    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(1)
    }
  },

  removeBtn: {
    paddingLeft: '12px',
    cursor: 'pointer'
  },

  quantity: {
    display: 'flex'
  },

  arrow: {
    cursor: 'pointer',
    fontWeight: 'bold'
  },

  value: {
    textAlign: 'center'
  }
}));

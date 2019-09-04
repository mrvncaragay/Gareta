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
      width: '23%'
    }
  },

  img: {
    width: '20%',
    marginRight: theme.spacing(2.5),
    height: '130px'
  },

  removeBtn: {
    paddingLeft: '12px',
    cursor: 'pointer'
  }
}));

import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px'
  },

  title: {
    marginBottom: '25px'
  },

  prview: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

// .collection-preview {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;

//   .title {
//     font-size: 28px;
//     margin-bottom: 25px;
//   }

//   .preview {
//     display: flex;
//     justify-content: space-between;
//   }
// }

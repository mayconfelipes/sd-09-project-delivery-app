import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  registerTitle: {
    textAlign: 'center',
    fontSize: '26px',
  },
  formsContainer: {
    backgroundColor: '#EAF1EF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.up('lg')]: {
    },
  },
  inputTitles: {
    margin: '10px 0 5px 5px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
  },
  buttonStyle: {
    cursor: 'pointer',
    width: '202px',
    margin: '10px 0',
    padding: '5px 0',
    backgroundColor: '#036B52',
    color: '#FFF',
    borderRadius: '6px',
    '&:disabled': {
      cursor: 'default',
      backgroundColor: '#cccccc',
      color: '#666666',
    },
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: '85%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
  },
  [theme.breakpoints.up('md')]: {
  },

  sumContainer: {
    backgroundColor: '#036B52',
    borderRadius: '5px',
    color: 'white',
    display: 'flex',
    fontSize: '1.3rem',
    margin: 'auto',
    position: 'relative',
    left: '40%',
    bottom: '50px',
    justifyContent: 'center',
    width: '250px',
  },
  [theme.breakpoints.down('sm')]: {
  },
  [theme.breakpoints.up('md')]: {
  },

  textSum: {
    margin: '0',
    padding: '10px',
  },

  textLink: {
    textDecoration: 'none',
  },
}));

export default useStyles;

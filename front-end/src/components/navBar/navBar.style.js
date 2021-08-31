import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#036B52',
    height: '50px',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
    },
  },
  containersOptionsNavBarContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '35%',
    },
    [theme.breakpoints.up('md')]: {
      width: '35%',
    },
  },
  optionsNavBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    height: '50px',
    margin: '0',
    color: '#FFF',
    cursor: 'pointer',
    border: 'none',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      fontSize: '10px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '15px',
      width: '50%',
    },
  },
  link: {
    width: '100%',
    textDecoration: 'none',
  },
}));

export default useStyles;

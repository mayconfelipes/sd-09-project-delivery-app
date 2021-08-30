import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: '85%',
    display: 'flex',
    margin: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
  },
  [theme.breakpoints.up('md')]: {
  },
}));

export default useStyles;

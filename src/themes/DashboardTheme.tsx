import { makeStyles } from '@material-ui/core/styles';
const DashboardStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },  
  }));

  export default DashboardStyles;
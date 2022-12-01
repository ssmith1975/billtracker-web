import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//import Chart from './Chart';
//import Deposits from './Deposits';
import Payments from './Payments';

import DashboardStyles from '../../Themes/DashboardTheme';


export default function Dashboard() {
  const classes = DashboardStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (

          // Begin main content 
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>  
                Chart            
                {/* <Chart /> */}
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                Deposit...
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Payments />
              </Paper>
            </Grid>
          </Grid>
          // End main content


  );
}
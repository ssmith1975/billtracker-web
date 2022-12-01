import { Link, Typography } from '@material-ui/core';
import React from 'react';


const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">    
        <Link color="inherit" href="https://material-ui.com/">
          Bill Tracker App
        </Link>{' '}
        {'Copyright © '}{new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Copyright;
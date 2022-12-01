import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TitleStyles from '../../Themes/TitleTheme';

export default function Title(props:any ) {
const classes = TitleStyles();

  
  return (
    <Typography component="h2" variant="h6" className={classes.greenText} gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
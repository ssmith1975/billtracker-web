import React from 'react';
import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Companies from '../Pages/Companies';
import Dashboard from '../Components/Dashboard/Dashboard';
import { mainListItems, secondaryListItems } from '../Components/App/MenuItems';

import "./App.css";
import AppStyles from '../Themes/AppTheme';
import Copyright from '../Components/App/Copyright';

const App = () => {

    const classes = AppStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
  return (
    <div className="App">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography data-testid="app-title" role="heading" component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Bill Tracker App
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary" overlap="rectangular">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider /><List>{secondaryListItems}</List>
          
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>

            <Router>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
      
                <Route path="/reports">
                  Reports
                </Route>             
                <Route path="/invoices">
                  Invoice
                </Route>
                <Route path="/companies"  element={<Companies />} />
                <Route path="/" element={<Dashboard />} />            
              </Routes>
            </Router>

            <Box pt={4}>
              <Copyright />
            </Box>

          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;

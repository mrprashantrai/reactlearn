import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';
import { withStyles,createMuiTheme,MuiThemeProvider  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import styles1 from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';



const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


const theme = createMuiTheme({
  palette: {
    primary: {
        textColor: '#00000',

      main: '#ff9933',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});



function Menubar(props) {
  const { classes } = props;
  return (
    <div>
      <Router>
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit"  aria-label="Menu">
            <img src="img/logo_1.png" height="50" width="50" alt='img'/>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Sanjay Sharma
          </Typography>
          <ul>
          <li><Link to={'/Home'}>Home</Link></li>
          <li><Link to={'/Header'}>Gallery</Link></li>
          <li><Link to={'/Contact'}>Contact</Link></li>
          </ul>
        </Toolbar>
      </AppBar>
      <Switch>
      <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Header' component={Header} />
        <Route exact path='/Contact' component={Contact} />
      </Switch>
      </MuiThemeProvider>
      </Router>
    </div>
  );
}

Menubar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles,styles1)(Menubar);

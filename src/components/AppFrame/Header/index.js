import React from 'react';

import clsx from 'clsx';
import firebase from 'firebase/app';

import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import styles from '../styles';

const useStyles = makeStyles(styles);

const Header = (props) => {
  const { open, onOpen } = props;
  const classes = useStyles();

  const user = firebase.auth().currentUser;
  const { displayName, photoURL } = user;

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Dashboard
        </Typography>
        <Avatar alt={displayName} src={photoURL} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

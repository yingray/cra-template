import React, { useCallback, useState } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import Content from './Content';
import Drawer from './Drawer';
import Header from './Header';
import styles from './styles';

const useStyles = makeStyles(createStyles(styles));

const AppFrame = (props) => {
  const { children } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  });

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  });

  return (
    <div className={classes.root}>
      <Header open={open} onOpen={handleDrawerOpen} onClose={handleDrawerClose} />
      <Drawer open={open} onOpen={handleDrawerOpen} onClose={handleDrawerClose} />
      <Content>{children}</Content>
    </div>
  );
};

export default AppFrame;

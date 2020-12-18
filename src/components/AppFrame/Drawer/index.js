import clsx from 'clsx';

import { Divider, Drawer, IconButton, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import styles from '../styles';
import { mainListItems, secondaryListItems } from './listItems';

const useStyles = makeStyles(styles);

const EnhancedDrawer = (props) => {
  const { open, onClose } = props;

  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
};

export default EnhancedDrawer;

import { createStyles, makeStyles } from '@material-ui/core/styles';

import styles from '../styles';

const useStyles = makeStyles(createStyles(styles));

const Content = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      {children}
    </main>
  );
};

export default Content;

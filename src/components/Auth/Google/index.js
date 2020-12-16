import { useHistory } from 'react-router-dom';

import to from 'await-to-js';
import firebase from 'firebase/app';

import { Button } from '@material-ui/core';

const Google = () => {
  const history = useHistory();

  const handleClick = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [err] = await to(firebase.auth().signInWithPopup(provider));
    if (err) {
      // TODO: handle error
      return;
    }

    return history.push('/dashboard');
  };

  return (
    <Button variant="contained" color="default" onClick={handleClick}>
      Sign in with Google
    </Button>
  );
};

export default Google;

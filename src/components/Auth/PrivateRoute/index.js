import { Redirect, Route } from 'react-router-dom';

import firebase from 'firebase/app';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  const handleRedner = ({ location }) => {
    if (firebase.auth().currentUser) {
      return children;
    }
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  };

  return <Route {...rest} render={handleRedner} />;
};

export default PrivateRoute;

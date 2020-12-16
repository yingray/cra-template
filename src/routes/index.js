import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '@/components/App';
import AppFrame from '@/components/AppFrame';
import PrivateRoute from '@/components/Auth/PrivateRoute';

const Root = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard">
          <AppFrame />
        </PrivateRoute>
        <Route>
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;

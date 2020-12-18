import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '@/components/App';
import PrivateRoute from '@/components/Auth/PrivateRoute';
import Dashboard from './dashboard';

const Root = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route>
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;

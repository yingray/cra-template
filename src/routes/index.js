import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '@/components/App';
import AppFrame from '@/components/AppFrame';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <AppFrame />
        </Route>
        <Route>
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;

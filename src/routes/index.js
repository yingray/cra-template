import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '@/components/App';

const Root = () => {
  return (
    <Router>
      <Route>
        <App />
      </Route>
    </Router>
  );
};

export default Root;

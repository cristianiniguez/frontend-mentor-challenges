import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/detail/:code' component={Detail} exact />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

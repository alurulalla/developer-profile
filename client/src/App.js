import { Route, Switch } from 'react-router-dom';

import DeveloperInfoPage from './pages/DeveloperInfoPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/developer-info/:id' exact component={DeveloperInfoPage} />
    </Switch>
  );
}

export default App;

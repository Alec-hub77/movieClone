import './App.scss';
import {Home, Watch, Register, Login} from './pages';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/watch">
            <Watch/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

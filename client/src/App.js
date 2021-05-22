import { useContext } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";



function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => (user ? <Home/> : <Register/>)} />
        <Route path="/login" exact component={() => user ? <Redirect to="/" /> : <Login />} />
        <Route path="/register" exact component={() => user ? <Redirect to="/" /> : <Register />} />
        <Route path="/profile/:username" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;

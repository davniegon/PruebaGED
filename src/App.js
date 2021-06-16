import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Redirect} from "react-router-dom";
import Users from "./Users";


function App() {
  return (
      <HashRouter>
        <Route render={() => <Redirect to="/"/>}/>
        <Route exact path="/" component={Users} />
      </HashRouter>

  );
}

export default App;

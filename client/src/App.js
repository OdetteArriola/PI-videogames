import './App.css';
import {Route, useLocation} from "react-router-dom"
import { Home, LandingPage, Detail } from "./views"
import NavBar from "./components/NavBar/NavBar"
import Form from './views/Form/Form';



function App() {
  const location = useLocation()
  return (
    <div>
      {location.pathname !== '/' && <NavBar/> }

      <Route exact path="/" render={LandingPage}/>
      <Route exact path="/home" render={Home}/>
      <Route exact path="/home/:id" render={Detail}/>
      <Route exact path="/create" render={Form}/>      
      
    </div>
  );
}

export default App;

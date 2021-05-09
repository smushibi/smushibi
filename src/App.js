
import './App.css';
import Container from '@material-ui/core/Container'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Navbar from './comps/Navbar';
import SignUp from './comps/SignUp';
import SignIn from './comps/SignIn';
import "./firebase/configf"
import { UserProvider } from "./firebase/UserProvider"
import Profile from './comps/Profile';


export default function App() {
  return (
   <Container>
     <UserProvider>
     <Navbar/>
     <Router>
       <Switch>
         <Route  exact path="/signup" component={SignUp}/>
         <Route  path="/signin"component={SignIn}/>
         <Route  path="/profile" component={Profile}/>
       </Switch>
     </Router>
     </UserProvider>
   </Container>
  );
}




import './App.css';
import Container from '@material-ui/core/Container'



import {
 
  Switch,
  Route,
  
} from "react-router-dom";
import Navbar from './comps/Navbar';
import SignUp from './comps/SignUp';
import Login from './comps/Login';
import "./firebase/configf"
import { UserProvider } from "./firebase/UserProvider"
import Profile from './comps/Profile';



export default function App() {
  return (
   <Container>
     <UserProvider>
     <Navbar/>
       <Switch>
         <Route  exact path="/signup" component={SignUp}/>
         <Route  path="/login"component={Login}/>
         <Route  path="/profile/:id" component={Profile}/>
       </Switch>
     </UserProvider>
   </Container>
  );
}



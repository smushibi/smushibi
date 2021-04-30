
import './App.css';
import Container from '@material-ui/core/Container'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Navbar from './comps/Navbar';
import SignUp from './comps/SignUp';



export default function App() {
  return (
   <Container maxWidth="xs">
     <Navbar/>
     <Router>
       <Switch>
         <Route exact path="/signup">
          <SignUp/>
         </Route>
       </Switch>
     </Router>
   </Container>
  );
}



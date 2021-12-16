import {Switch,Route,Redirect} from "react-router-dom";
import PageNotFound from "./pages/pageNotFound";
import User from "./pages/user";
import UserDetails from "./pages/userDetail";

const App =()=> {

  return <Switch>
    <Route path='/' exact>
      <Redirect to='/user'/>
    </Route>
    <Route path='/user' exact>
      <User/>
    </Route>
    <Route path='/user/:userId'>
      <UserDetails/>
    </Route>
    <Route path='*'>
      <PageNotFound/>
    </Route>
  </Switch>
}
export default App;
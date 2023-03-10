import logo from './logo.svg';
import './App.css';
import ListEmployees from './components/ListEmployees';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
  return (
    <div>
       <Router>
           <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListEmployees}></Route>
                        <Route path="/employees" component={ListEmployees}></Route>
                        <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
                        <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
                        {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
           <FooterComponent/>
       </Router>    
    </div>
   
  );
}

export default App;

import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Register/Register';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

// const toolbar = props => (
//   <header className="toolbar">
//     <nav className="toolbar_navigation">
//         <div className="toolbar_logo"><a href="/">Recon</a></div>
//         <div className="spacer" />
//         <div className="toolbar_navigation_items"> 
//             <ul>
//                 <li><a href="/">Login</a></li>
//                 <li><a href="/">Register</a></li>
//             </ul> 
//         </div>
//         <div>
//             <DrawerToggleButton />
//         </div>
//     </nav>
//   </header>
// );

// export default toolbar;


class Toolbar extends Component {
    render() {
      return (
        <Router>  
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_logo"><a href="/">Recon</a></div>
                <div className="spacer" />
                <div className="toolbar_navigation_items"> 
                    <ul>
                    <li><Link to={'/login'} className="nav-link">Login</Link></li>
                    <li><Link to={'/register'} className="nav-link">Register</Link></li>
                    </ul> 
                </div>
                <div>
                    <DrawerToggleButton />
                </div>
            </nav>

            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>

        </header>

        </Router>

      );
    }
  }
  
  export default Toolbar;
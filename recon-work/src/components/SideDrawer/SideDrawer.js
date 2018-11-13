import React, { Component } from 'react';
import './SideDrawer.css';

// const sideDrawer = (props) => {
//     return(
//         <div>
//             <nav className="side_drawer">
//                 <div className="side_drawer_navigation_items">
//                     <ul>
//                         <li><a href="/">Menu 1</a></li>
//                         <li><a href="/">Menu 2</a></li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default sideDrawer;


class SideDrawer extends Component {
    render() {
      return (
        <div>
            <nav className="side_drawer">
                <div className="side_drawer_navigation_items">
                    <ul>
                        <li><a href="/">Menu 1</a></li>
                        <li><a href="/">Menu 2</a></li>
                    </ul>
                </div>
            </nav>
        </div>
      );
    }
  }
  
  export default SideDrawer;
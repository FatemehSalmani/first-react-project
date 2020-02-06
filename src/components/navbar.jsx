import React, { Component } from 'react';
class navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
             <span className="navbar-brand" >
                 updete navbar 
             </span>
                <span className="badge badge-pill badge-secondary">
                     {this.props.totalCounters}
                 </span>
            </nav>
            );
    }
}
 
export default navbar;

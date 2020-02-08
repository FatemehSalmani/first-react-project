import React, { Component } from 'react';
class navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
             <span className="navbar-brand" >
                 updete navbar 
             
                <span className="badge badge-pill badge-secondary">
                     {this.props.totalCounters}
                 </span>
                 
            </span>
            </nav>
            );
    }
}
 
export default navbar;

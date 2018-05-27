import React from'react';


class Bakery extends React.Component{

        render(){
            return(
                <li className="list-group-item">
                <div>
                <h4>{this.props.Bakery.bakeryName}</h4>
                <p>Distance: {this.props.Bakery.distance} km</p>
                <p>Mobile: {this.props.Bakery.phonenumber}</p>
                </div>

                </li>
                )
            }

    }

export default Bakery

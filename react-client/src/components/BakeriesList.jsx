import React from'react';
import Bakery from './Bakery.jsx'



class BakeriesList extends React.Component{
    constructor(props){
        super(props);
    }
        render(){

            return(
                <div style={{border:'solid', 'borderRadius': '15px', 'borderColor' : '#E9AB17'}}>
                <ul style={{backgrondColor: '#E44F4F'}} className="list-group">
                {this.props.Bakery && this.props.Bakery.map((Bakery)=><Bakery Bakery={Bakery} key={'d'+Bakery.bakeryName} longitude={this.props.longitude} laltitude={this.props.laltitude}/>)}
                </ul>
                </div>
                )
            }

    }

export default BakeriesList

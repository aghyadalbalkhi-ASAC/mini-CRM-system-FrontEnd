import React,{ Component } from 'react';

import DataView from './DataView';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            orders:[],
        };
    }

    render(){

    return (
        <>
            <DataView orders={this.props.orders} />        
        </>
    );
}
}

export default Dashboard;
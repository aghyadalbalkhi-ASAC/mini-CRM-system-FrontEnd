import React,{ Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../LoginComponent/Login'
import Register from '../RegisterComponent/Register';
import Home from '../HomeComponent/Home';
import Header from '../HeaderComponent/Header';
import Dashboard from '../DashboardComponent/dashboard';
import FormData from '../DashboardComponent/FormData';


import getOrders from '../../shared/orders'
import getAdmins from "../../shared/admins";

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            orders:[],
            admins:[],
        };
    }

    componentDidMount(){
        getOrders().then( data =>{
            this.setState({orders:data})
        });

        getAdmins().then( data =>{
            this.setState({admins:data})
        });
        
    }

    render(){

    const HomePage = () => {
            return(
                <Home orders={this.state.orders.length}   admins={this.state.admins.length} />
            );
        }


    return (
        <>
            <div>
            <Header />
            <Switch>
                    <Route path='/home' component={HomePage} />             
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/dashboard' component={()=> <Dashboard orders={this.state.orders} />}/>
                    <Route exact path='/order' component={FormData} />
                    <Route exact path='/order/:id' component={FormData} />
                    <Redirect to="/home" />
                </Switch>
            </div>

        </>
    );
}
}

export default Main;
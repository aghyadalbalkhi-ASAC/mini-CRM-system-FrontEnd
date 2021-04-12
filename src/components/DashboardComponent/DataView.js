// DataView is a presentional Component used to render dashboard view

import react from 'react';
import {Table,Jumbotron,Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const DataView = (props) =>{


    const orders = props.orders.map( order =>{
        return( <tr key={order._id}>
        <td>{order._id}</td>
        <td>{order.customername}</td>
        <td>{order.service}</td>
        <td><DeleteButton id={order._id}/></td>
        <td><UpdateButton id={order._id}/></td>
        
            </tr>);
});

    return(
        <>
            <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12" >
                                <h1>Dashboard </h1>
                            </div>
                        </div>
                    </div>
            </Jumbotron>

            <div className="container">
                <div className="row row-header">
                    <div className="col-6" md={6} >
                    
                        <br></br>
                            <h2>Order Details</h2>
                        <br></br>
                    </div>
                    <div className="col-6" md={6} >
                        <br></br>
                        <Link to ={`/order`} > <Button> Add</Button></Link>
                        <br></br>
                    </div>
                </div>
            </div>

            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th> ID</th>
                    <th>Customer Name</th>
                    <th>Service</th>
                    <th>Delete</th>
                    <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {orders}
                </tbody>
            </Table>
        </>
    );

}


function UpdateButton(props){
    return(
        <Link to ={`/order/${props.id}`} ><span className="fa fa-refresh fa-lg"></span></Link>
        );}

function DeleteButton(props){
    return(
    <span id='s' onClick={()=>{deleteRequest(props.id)}} className="fa fa-trash fa-lg"></span>
    );
}


function deleteRequest (id) {
    console.log('aa')
    let url=`http://ec2-54-209-2-124.compute-1.amazonaws.com:3000/deleteOrders/${id}`;
    fetch(url,
        {
            method: "DELETE"
        }).then(res => res.json())                      // the res should convert josn to object
        .then(res => {
            console.log(res);
            window.location.href = "/dashboard";                
        });
}




export default DataView;

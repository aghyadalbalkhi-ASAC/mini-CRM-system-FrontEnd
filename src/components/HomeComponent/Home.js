import React,{ Component } from 'react';
import {Bar} from 'react-chartjs-2';
import { Jumbotron} from 'reactstrap';



class Home extends Component {

    constructor(props){
        super(props);
        this.state={
        };
    }
    
	render() {
        let orders =this.props.orders;
        let admins =this.props.admins;
        const state = {
            labels: ['orders', 'admins'],
            datasets: [
                {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [orders, admins,0],
                }
            ]
        }
        

		return (
            <>
                <div>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12" >
                                <h1> Login Page</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <br></br><br></br>
                </div>
                <div>
                    <Bar
                        data={state}
                        width={50}
                        height={300}
                        options={{
                            maintainAspectRatio: false ,
                        title:{
                            display:true,
                            text:'Average Rainfall per month',
                            fontSize:20
                        },
                        legend:{  
                            display:true,
                            position:'right'
                        }
                    }}
                    />
                </div>
        </>
		);
    }
    
    

}

export default Home;
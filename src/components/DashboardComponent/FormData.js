import React, { Component } from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import baseUrl from '../../shared/baseUrl';

class FormData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customername: '',
            service: '',
            status:'',
            touched: {
                customername: false,
                service: false
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        
    }

    handleInputChange(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let url='';
        let method='';
        let objectsend ={
            customername:this.state.customername,
            service:this.state.service,
        }

        if (this.state.status ==='new') { 

            url = `${baseUrl}/newOrders`;
            method ='POST';
        }else{
            url = `${baseUrl}/editOrders/${this.props.match.params.id}`;
            method ='PUT';
            }

        fetch(url,
        {
            body: JSON.stringify(objectsend),
            method: method
        }).then(res => res.json())
        .then(res => 
            {
                console.log(res.rowCount)
                if (res !=='err'){
                    alert (`${res.customername} Done Successfully`);
                    document.location.href = '/dashboard'
                }
                else{
                    alert (`Error `);
                }
            }
            );

        event.preventDefault();
    }

    handleDataId(id){
        console.log(id);
        let url = `${baseUrl}/orders/${id}`;
        fetch(url,
        {
            method: "get"
        }).then(res => res.json())                      // the res should convert josn to object
        .then(res => {
            console.log(res);
            this.setState({ customername: res[0].customername ,service:res[0].service});
            
        });          // res is the fetch response from server
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(customername,service) {
        const errors = {
            customername: '',
            service: ''
        };

        if (this.state.touched.customername && customername.length < 3)
            errors.customername = 'Customer Name should be >= 3 characters';
        else if (this.state.touched.customername && customername.length > 30)
            errors.customername = 'Customer Name should be <= 10 characters';

        if (this.state.touched.service && service.length < 3)
            errors.service = 'Service should be >= 3 characters';
        else if (this.state.touched.service && service.length > 30)
            errors.service = 'Service should be <= 10 characters';
        return errors;
    }

    componentDidMount(){
        const { match: { params } } = this.props;       //or this.props.match.params.id
        this.handleDataId(params.id);
        this.setState({ status: params.id ? 'update' : 'new'});
    }

    render() {
        console.log(this.state.status)
        const errors = this.validate(this.state.customername,this.state.service);
        return(
            <>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12" >
                                <h1>Please Fill The Details </h1>
                                <p> Customer Name should be betweent 3 and 30 characters maximum  </p>
                                <p> Service should be betweent 3 and 30 characters maximum  </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Order Form</h3>
                        </div>
                        <br></br><br></br><br></br>
                        <div className="col-12">
                            <Form onSubmit={this.handleSubmit}>

        {/* <-------------------------------------   Customer Name  --------------------------------------> */}

                            <FormGroup row>
                                    <Label htmlFor="customername" md={12}>Customer Name</Label>
                                    <Col md={12}>
                                        <Input type="text" id="customername" name="customername"
                                            placeholder="Customer Name"
                                            value={this.state.customername}
                                            required
                                            valid={errors.customername === ''}
                                            invalid={errors.customername !== ''}
                                            onBlur={this.handleBlur('customername')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.customername}</FormFeedback>
                                    </Col>
                                </FormGroup>

                                
        {/* <-------------------------------------   Service  --------------------------------------> */}

                            <FormGroup row>
                                    <Label htmlFor="service" md={12}> Service </Label>
                                    <Col md={12}>
                                        <Input type="text" id="service" name="service"
                                            placeholder="Service"
                                            value={this.state.service}
                                            required
                                            valid={errors.service === ''}
                                            invalid={errors.service !== ''}
                                            onBlur={this.handleBlur('service')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.service}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 12, offset: 0}}>
                                        <Button type="submit" color="primary">
                                            Send
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
        </>
        );
    }
}

export default FormData;
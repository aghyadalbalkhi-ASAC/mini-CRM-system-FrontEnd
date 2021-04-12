import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Jumbotron, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';


class Register extends Component {
    state = {
        credentials: {fullname:'',username:'', password:''},
        redirect: null
    }

    register = event =>{
        fetch('http://ec2-54-209-2-124.compute-1.amazonaws.com:3000/adminSingUp',{
            method:'POST',
            
            body:JSON.stringify(this.state.credentials)
        })
        .then(data =>data.json())
        .then(
            data => {
                console.log(data);
                if(data ==='registred'){
                    this.setState({ redirect: "/login" });                    
                }else{
                    alert('Please Enter The Correct Info')
                }
            }
        ).catch(error => console.log("here",error));

        event.preventDefault();

    }

    inputChanged = event =>{
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials : cred});
        console.log(this.state.credentials);
    }


    render() {
        if (this.state.redirect) {
            console.log(this.state.redirect)
            return <Redirect to={this.state.redirect} />
        }
        return (
            <>
                {/* <form className="form1">
                    <input type="text" name="username" className="un" align="center" placeholder="Username"
                    value={this.state.credentials.username} 
                    onChange={this.inputChanged}/>
                    <input type="password" name="password" className="pass" align="center" placeholder="Password"
                    value={this.state.credentials.password} 
                    onChange={this.inputChanged}/>

                <div className="div-login"><a onClick={this.login} className="submit" align="center">Login</a></div>
                </form> */}
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12" >
                            <h1> Register Page</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <br></br>
            <br></br>

            <div className="container">
            
                            <div className="specialinput" className="row row-content">
                            <div className="col-12" >
                                <Form onSubmit={this.register}>
                                <FormGroup row>
                                        <Label htmlFor="fullname" md={12}>Full Name</Label>
                                            <Col md={4}>
                                                <Input type="text" id="fullname" name="fullname"
                                                    value={this.state.credentials.fullname}
                                                    valid={''}
                                                    invalid={''}
                                                    onChange={this.inputChanged} />
                                            </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="username" md={12}>Username</Label>
                                            <Col md={4}>
                                                <Input type="text" id="username" name="username"
                                                    value={this.state.credentials.username}
                                                    valid={''}
                                                    invalid={''}
                                                    onChange={this.inputChanged} />
                                            </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="password" md={12}>Password</Label>
                                            <Col md={4}>
                                                <Input type="password" id="password" name="password"
                                                    value={this.state.credentials.password}
                                                    valid={''}
                                                    invalid={''}
                                                    onChange={this.inputChanged} />
                                            </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                            <Col md={4}>
                                                <Button type="submit" color="primary">
                                                    Register
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

export default Register;
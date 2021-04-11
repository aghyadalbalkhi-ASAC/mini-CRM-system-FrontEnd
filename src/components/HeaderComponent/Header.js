import React, {Component} from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar dark color='primary' expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink  className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                            // eslint-disable-next-line
                                <NavLink className="nav_right" className="nav-link" to='/login'><span className="fa fa-address-card fa-lg"></span> Login</NavLink>
                            </NavItem>
                            <NavItem>
                                // eslint-disable-next-line
                                <NavLink className="nav_right" className="nav-link" to='/Register'><span className="fa fa-address-card fa-lg"></span> Register</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}


export default Header;
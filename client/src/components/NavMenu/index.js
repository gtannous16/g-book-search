import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './style.css';

class NavMenu extends component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state ={
            isOpen: false
        };
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <header className='header'>
                <Navbar light expand='md'>
                    <Link to ={'/'}>Google Books Search</Link>
                    <NavbarToggler onClick = {this.toggle}/>
                    <Collapse isOpen ={this.state.isOpen}navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <link to ={'/saved'}>Saved</link>
                            </NavItem>
                            <NavItem>
                                <link to ={'/'}>Books</link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

export default NavMenu;
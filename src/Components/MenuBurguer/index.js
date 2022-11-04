
import React, { Component } from "react";
import { bubble as Menu } from 'react-burger-menu'
import {stylesCompent as styles} from './styles.js'

class MenuBurguer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Menu  styles={ styles } >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a className="menu-item--small">Settings</a>
          </Menu> 
        );
    }
}

export default MenuBurguer;
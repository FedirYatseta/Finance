
import {
    Link
} from "react-router-dom";

import { Li, Nav, Ul } from './style';

import React from 'react'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <Ul>
                    <Li>
                        <Link to="/">Home</Link>
                    </Li>
                    <Li>
                        <Link to="/about">About</Link>
                    </Li>
                    <Li>
                        <Link to="/Statistics">Statistics</Link>
                    </Li>
                </Ul>
            </Nav>
        </div>
    )
}

export default Navbar


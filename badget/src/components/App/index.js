import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import About from '../About';
import Statistic from '../Statistics';
import Home from '../Home';
import Navbar from '../Nav';
import { open } from '../../utils/indexdb'


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }

    }

    componentDidMount() {
        open().then(() => {
            this.setState({
                loading: false
            })
        }).catch((e) => {
            console.log('Error', e);
        })
    }
    render() {
        if (this.state.loading) {
            return <div> loading</div>
        }
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/statistics" element={<Statistic />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>

        )
    }

}

export default App;
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<h1>HOME PAGE</h1>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                </Routes>
            </Router>);
    }
}


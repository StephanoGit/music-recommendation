import React, { Component } from "react";

import { Routes, Route, Link } from "react-router-dom"

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="login-div">
                <h2>Discover your new favorite music!</h2>
                <p>Sign in using Spotify</p>
                <Link to="/">
                    <button type="button" class="btn btn-success" id="login-btn">Spotify</button>
                </Link>
            </div>
            );
    }
}

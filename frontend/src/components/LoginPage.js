import React, { Component } from "react";

import { Routes, Route, Link } from "react-router-dom"

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spotifyAuthenticated: false
        };
        this._loginButtonPressed = this._loginButtonPressed.bind(this);
        this.autheticateSpotify = this.autheticateSpotify.bind(this);
    }

    autheticateSpotify(){
        fetch('/spotify/is-authenticated')
            .then((response) => response.json())
            .then((data) => {
                this.setState({spotifyAuthenticated: data.status});
                if (!data.status){
                    fetch('/spotify/get-auth-url')
                        .then((response) => response.json())
                        .then((data) => {
                            window.location.replace(data.url);
                        });
                }
            });
    }

    render() {
        return (
            <div class="login-div">
                <h2>Discover your new favorite music!</h2>
                <p>Sign in using Spotify</p>
                <button type="button" class="btn btn-success" id="login-btn" onClick={this._loginButtonPressed}>Spotify</button>
            </div>
            );
    }

    _loginButtonPressed() {
        this.autheticateSpotify();
        console.log(this.state.spotifyAuthenticated);
    }
}

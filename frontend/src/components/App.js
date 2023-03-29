import React, { Component } from "react";
import { render } from "react-dom";
import { Routes, Route} from "react-router-dom";

import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Profile from "./ProfilePage";



export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomePage></HomePage>;
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);
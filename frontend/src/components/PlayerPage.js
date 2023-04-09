import React, { Component } from "react";

import MusicPlayer from "./MusicPlayer";

export default class PlayerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: {}
        };
        this.getCurrentSong = this.getCurrentSong.bind(this)
    }

    componentDidMount(){
        this.interval = setInterval(this.getCurrentSong, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>Player Pages</h1>
                <MusicPlayer {...this.state.song}></MusicPlayer>
            </div>
        );
    }

    getCurrentSong() {
        fetch('/spotify/current-song')
            .then((response) => {
                if(!response.ok){
                    return {};
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                this.setState({song: data });
                console.log(data)
            })
    }
}

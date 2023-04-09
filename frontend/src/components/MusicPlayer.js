import React, { Component } from "react";

export default class MusicPlayer extends Component {
    constructor(props) {
        super(props);
    }

    pauseSong(){
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json"}
        };
        fetch("/spotify/pause", requestOptions).then((response) => console.log(response));
    }

    playSong(){
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json"}
        };
        fetch("/spotify/play", requestOptions).then((response) => console.log(response));
    }

    render() {
        return (
            <div class="container d-flex justify-content-center my-4 mb-5">
                <div id="mobile-box">
                    <div class="card">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img class="card-img-top" src={this.props.img_url} alt="Card image cap"/>
                        </div>
                        <div class="card-body text-center">

                            <h5 class="h5 font-weight-bold">{this.props.artist}</h5>
                            <p class="mb-0">{this.props.title}</p>

                            <audio id="music" preload="true">
                                <source src="#"/>
                            </audio>
                            <div id="audioplayer">
                                <button type="button" class="btn btn-success" onClick={ () => {this.props.is_playing ? this.pauseSong() : this.playSong();}}>
                                    {this.props.is_playing ? <p>PAUSE</p> : <p>PLAY</p>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
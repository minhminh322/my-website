import React, { Component } from "react";
import YouTube from "react-youtube";

class YoutubeApp extends Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      // <div className="main">
      <YouTube className="app-main" videoId="FE_K5QSiBY0" opts={opts} onReady={this._onReady} />
      // {/* </div> */}
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YoutubeApp;

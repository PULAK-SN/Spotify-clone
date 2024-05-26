import React, { useEffect } from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import "./index.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

// super object
// instance of spotify-web-api
const spotify = new SpotifyWebApi();

function App() {
  // const [token, setTaken] = useState(null);

  // object destructure
  const [{ user, token }, dispatch] = useDataLayerValue();

  // const [dataLayer, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setTaken(_token);

      // it will allow to safely talk back and forth between Spotify_api and React app
      spotify.setAccessToken(_token);

      // return the user information, its a promise
      spotify.getMe().then((user) => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcQ9COmYvdajy").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  // console.log(user);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

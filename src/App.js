import './App.css';
import React, { useState, useEffect } from 'react'
import Login from './components/Login';
import { getTokenFromResponse } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();

function App() {
  const [ token, setToken ] = useState(null);

  useEffect( ()=>{
    const hash = getTokenFromResponse();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        console.log(user);
      })
    };
  },[])

  return (
    <div className="app">
      { token ? ( <p>Logged in</p>) : ( <Login /> )}
    </div>
  );
}

export default App;

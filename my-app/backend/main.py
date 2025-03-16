from fastapi import FastAPI # type: ignore
import spotipy # type: ignore
from spotipy.oauth2 import SpotifyClientCredentials # type: ignore
import requests # type: ignore
import os

app = FastAPI()

CLIENT_ID_KEY = "d2f24b7ead2a43ab9847c27be93bcdc4"
CLIENT_SECRET_KEY = "1e781ba379e345a6bd2a94fa7ca8b998"

spotify = spotipy.Spotify(auth_manager=SpotifyClientCredentials(
    spotify_client_id_key=CLIENT_ID_KEY, 
    spotify_client_secret_key=CLIENT_SECRET_KEY
    )
)

@app.get("/")
def read_root():
    return {"message": "FastAPI"}

@app.get("/search")
def search_song(query: str):
    results = spotify.search(q=query, limit=20, type="tracks")
    return {"tracks": results["tracks"]["items"]}

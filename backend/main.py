from fastapi import FastAPI # type: ignore
import spotipy # type: ignore
from spotipy.oauth2 import SpotifyClientCredentials # type: ignore
import requests # type: ignore
import os

app = FastAPI()

CLIENT_ID = "359f07879aba4ce591a56c7b4df31f07"
CLIENT_SECRET = "7d6b94a684f445b8ad4d04ffd5e6bd25"

spotify = spotipy.Spotify(auth_manager=SpotifyClientCredentials(
    client_id=CLIENT_ID, 
    client_secret=CLIENT_SECRET
    )
)

@app.get("/")
def read_root():
    return {"message": "FastAPI"}

@app.get("/search")
def search_song(query: str):
    results = spotify.search(q=query, limit=20, type="tracks")
    return {"tracks": results["tracks"]["items"]}

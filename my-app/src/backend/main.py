# no longer used since we swapped to the YouTube Api

from fastapi import FastAPI # type: ignore
import spotipy # type: ignore
from spotipy.oauth2 import SpotifyClientCredentials # type: ignore
import requests # type: ignore
import os # type: ignore

app = FastAPI()

CLIENT_ID = "d2f24b7ead2a43ab9847c27be93bcdc4"
CLIENT_SECRET = "1e781ba379e345a6bd2a94fa7ca8b998"

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

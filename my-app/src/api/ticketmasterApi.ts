import axios from "axios";

const API_KEY = "lu2XMgR53WKxpacaWxyIMVDyEH0Y0yTi"; // <-- PUT YOUR API KEY HERE
const BASE_URL = "https://app.ticketmaster.com/discovery/v2";

export const searchConcerts = async (keyword: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/events.json`, {
      params: {
        apikey: API_KEY,
        keyword: keyword,
        classificationName: "music", // Only search for concerts/music
        size: 10, // Limit to 10 results
      },
    });
    return response.data._embedded?.events || [];
  } catch (error) {
    console.error("Error fetching concerts:", error);
    return [];
  }
};
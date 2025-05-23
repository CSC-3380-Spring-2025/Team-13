import axios from "axios";

const TICKETMASTER_API_KEY = "lu2XMgR53WKxpacaWxyIMVDyEH0Y0yTi";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2";

export const searchConcerts = async (keyword: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/events.json`, {
      params: {
        apikey: TICKETMASTER_API_KEY,
        keyword: keyword,
        classificationName: "music",
        size: 50,
      },
    });
    return response.data._embedded?.events || [];
  } catch (error) {
    console.error("Error fetching concerts:", error);
    return [];
  }
};
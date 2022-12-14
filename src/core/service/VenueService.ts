import axios from "axios";
import Venue from "../models/Venue";

export function getVenues(): Promise<Venue[]> {
  return axios
    .get("https://us-central1-hmf-app-dev.cloudfunctions.net/venueData")
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject();
    });
}

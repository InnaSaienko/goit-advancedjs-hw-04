import axios from "axios"

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "56231969-297dd38bb6be8c9e539b262b2";

export async function getImagesByQuery(query, page) {
  const response = await axios.get("", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
}
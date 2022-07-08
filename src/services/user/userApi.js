import axios from "../../api/axios";

const API_URL = "https://shipsheep.herokuapp.com/api/v1/orders/";

export async function UserAPI(url) {
  const body = {
    username: localStorage.getItem("username"),
  };
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      credentials: "same - origin",
      AUTHORIZATION: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };

  const res = await axios.post(
    API_URL + url,
    JSON.stringify(body),
    axiosConfig
  );
  if (res.error) {
    throw new Error(res.error);
  }
  return res.data;
}

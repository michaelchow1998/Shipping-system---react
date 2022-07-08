import axios from "../../api/axios";

const API_URL = "https://shipsheep.herokuapp.com/api/v1/";

export async function refreshToken() {
  const res = await axios
    .get(API_URL + "token/refresh", {
      Authorization: "Bearer " + localStorage.getItem("refresh_token"),
    })
    .then((response) => {
      if (response.data.accessToken) {
        console.log(response.data);
        localStorage.setItem(
          "access_token",
          JSON.stringify(response.data.access_token)
        );
      }
    });

  return res;
}

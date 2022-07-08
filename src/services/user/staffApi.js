import axios from "../../api/axios";

const API_URL = "http://localhost:8080/api/v1/staff/";

export async function CreateOrder(body) {
  const url = API_URL + "orders/shipping";
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      credentials: "same - origin",
      AUTHORIZATION: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };
  console.log(url, body);
  const res = await axios.post(url, JSON.stringify(body), axiosConfig);
  if (res.error) {
    throw new Error(res.error);
  }
  return res.data;
}

export async function UpdateProcessState(url, body) {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      credentials: "same - origin",
      AUTHORIZATION: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };

  const res = await axios.put(API_URL + url, JSON.stringify(body), axiosConfig);
  if (res.error) {
    throw new Error(res.error);
  }
  return res.data;
}

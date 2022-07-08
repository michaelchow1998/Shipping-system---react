import axios from "axios";

export default axios.create({
  baseURL: "https://shipsheep.herokuapp.com/api/v1",
});

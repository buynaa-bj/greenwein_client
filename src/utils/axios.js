import axios from "axios";

const instance = axios.create({
  // Dev API base
  baseURL: "http://localhost:8888/api/v1",
  // withCredentials: true, // хэрвээ cookie хэрэгтэй бол
});

export default instance;

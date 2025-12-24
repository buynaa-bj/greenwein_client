import axios from "axios";

const instance = axios.create({
  // Dev API base
  baseURL: "https://greenwein-api.vercel.app/api/v1",
  // withCredentials: true, // хэрвээ cookie хэрэгтэй бол
});

export default instance;

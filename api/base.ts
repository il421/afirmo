import axios from "axios";
import { Urls } from "./index";

const instance = axios.create({
  baseURL: " http://localhost:3001/"
});

export { instance, Urls };

import ky from "ky";
import { API_ENDPOINT } from "../utils/constants";

export const api = ky.create({
  prefixUrl: API_ENDPOINT,
  timeout: 5000,
  retry: 3,
});

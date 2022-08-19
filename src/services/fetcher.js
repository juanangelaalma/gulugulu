import axios from "axios";
import { API_URL } from '../configs'

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["X-User-Agent"] = "desktop"
axios.defaults.headers.common["X-Proxy-Location"] = "UA"
axios.defaults.headers.common["X-RapidAPI-Key"] = "7ab93f9e4cmsh5d77bf205dc6e39p1a8b4cjsn378b140107b3"
axios.defaults.headers.common["X-RapidAPI-Host"] = "google-search3.p.rapidapi.com"

const fetcher = async (url, config) => {
  const headers = {
    ...config,
    url,
    headers: {
      'Content-Type': 'application/json',
      ...config?.headers,
    }
  }

  try {
    const res = await axios.request(headers)
    return res;
  }catch(err) {
    throw err;
  }
}

export default fetcher;
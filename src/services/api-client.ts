import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[]
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '8dd63d0ad49a4a8ebaa185498614863e'
  }
})
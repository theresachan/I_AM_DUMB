import { axios } from "axios";

const API_KEY = 'b48420a60cmsh78735af23f8de35p1f6402jsne729cf420744';

const axiosInstance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 2000,
    headers: {'x-rapidapi-keyr': API_KEY }
  });

  export const searchTracks = singerName => {

    return axiosInstance.get(`search?q=${singerName}`).then(
        (data) => {
            
            debugger;
            return data;
        }
    )

  }
import axios from "axios";

const API_ROOT = import.meta.env.VITE_API_ROOT_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchNews(){
    return await axios.get(`${API_ROOT}&apiKey=${API_KEY}`)
        .then((response) => {
            return {
                success: true,
                data: response.data.articles
            }
        })
        .catch(err => {
            return {
                error: err.message,
                success: false
            }
        })
}
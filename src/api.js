import axios from "axios";

const API_ROOT = import.meta.env.VITE_API_ROOT_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function fetcNews(){
    return await axios.get(`${API_ROOT}&apiKey=${API_KEY}`)
        .then((response) => {
            const articles = response.data.articles;
            const edited_articles = articles.filter(article => {
                if (article.author && article.urlToImage && article.url && article.title && article.description) {
                    return article;
                }
            });
            return edited_articles;
        })
        .catch(err => {
            console.log(err);
        })
}
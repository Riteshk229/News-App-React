import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux';
import NewsIitem from './NewsIitem';

function Home(props) {
  console.log("props",props)
  const { data } = props;
  const [layout, setLayout] = useState("list");
  let fav = [];

  
  const handleLike = (id) => {
    const article = data.filter(article => {
      if (article.id === id) {
        return article;
      }
    })
    const isPresentInFav = fav.find((article) => {
      if (article[0].id === id) {
        return true;
      }
    });
    console.log(article);
    console.log(isPresentInFav);
    if (fav.length === 0) {
      fav = [article];
      localStorage.setItem("fav", JSON.stringify(fav));
    } else {
      if (!isPresentInFav) {
        fav = JSON.parse(localStorage.getItem('fav'));
        const newFav = [...fav,article];
        localStorage.setItem("fav", JSON.stringify(newFav));
      } else {
        const newFav = fav.filter((article) => article[0].id !== id);
        fav = [...newFav];
        localStorage.setItem("fav", JSON.stringify(newFav));
      }
    }
    console.log("fav", fav);
    console.log("fav ls", JSON.parse(localStorage.getItem("fav")));
  }
  
  useEffect(() => { console.log("refreshed") }, [fav]);

  console.log("data", data);
  return (
      <main
          className="mx-auto max-w bg-gray-200 mb-24"
      >
          <div className="p-2 bg-gray-400 text-indigo-100">
              Layout:
              <button type="button" className={`${layout === "list" && "bg-indigo-900"} mx-1 px-2 py-1 hover:bg-indigo-900 rounded`}  onClick={()=>setLayout("list")}>List</button>
              <button type="button" className={`${layout === "grid" && "bg-indigo-900"} mx-1 px-2 py-1 hover:bg-indigo-900 rounded`} onClick={()=>setLayout("grid")}>Grid</button>
          </div>

          <section className={`flex flex-wrap ${layout == "list" ? "pb-4" : "p-2"}`}>
              {data.map((article) => (
                <NewsIitem article={article} key={article.id} handleLike={handleLike} layout={layout} fav={fav} />
              ))}
              </section>

</main>
  )
}

const mapStateToProps = (state) => {
  console.log("state", state.NEWS);
  const localStoreage = window.localStorage;
  localStoreage.setItem("news", JSON.stringify(state.NEWS.news));;
  return {
    data: ( state.NEWS.news || JSON.parse(localStoreage.getItem("news"))),
  }
}


export default connect(mapStateToProps)(Home);
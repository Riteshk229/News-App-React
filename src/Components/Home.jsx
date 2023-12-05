import React, { useState } from 'react'

import { fetchNewsFromAPI } from '../features/newsSlice';
import { connect } from 'react-redux';

function Home(props) {
  console.log("props",props)
  const { data } = props;
  const [layout, setLayout] = useState("list");

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
              {data.map((article,index) => (
                <div
                  key={index}
                  className={`
                  ${layout == "list"
                      ? " w-full h-px-200 md:w-1/2 p-1 mb-0 "
                      : " max-w-full md:w-1/2 xl:w-1/3  p-2"}`
                  }>
                    
                  <article className={`
                  ${layout == 'list'
                    ? "w-full h-full flex-col bg-white p-2 shadow "
                    : "max-w-px-400 h-full flex-col bg-white p-2 shadow "
                    } relative `}>    
                    <div className='focus-green'>
                      <p className="p-2 text-xl text-blue-900 font-black font-serif whitespace-pre-line">
                      <a href={article.url} target="_blank" className="hover:underline hover:text-black">{ article.title.slice(0,45)}...</a>
                      </p>
                    </div>  
                    <div className="flex flex-column">
                    <img src={article.urlToImage} alt={`${article.title}.jpg`} className="w-1/3 bg-gray" />    
                        <div className="h-4/5 flex flex-col justify-between text-xl font-light ml-4" x-show={`${layout} === 'list'`}>
                        <p className='text-black text-lg md:text-base text-justify'>{article.description}...</p>
                          <p className="text-right font-bold absolute right-0 bottom-0">
                            <a href={article.url} target="_blank" className="uppercase text-base text-green-600 hover:text-blue">Read more →</a>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
              ))}
              </section>

</main>
  )
}

const mapStateToProps = (state) => {
  console.log("state", state.NEWS);
  const edited_data = state.NEWS.news.filter((article,index) => {
    if (article.author && article.description && article.url && article.urlToImage && article.title) {
      return { id: index,...article };
    }
  })
  return {
    data: edited_data
  }
}

export default connect(mapStateToProps)(Home);
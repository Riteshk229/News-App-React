import React from 'react'
import { useParams } from 'react-router-dom';

function Article(props) {
    const id  = parseInt(useParams().newsID);
    const article = JSON.parse(localStorage.getItem("news")).filter((item) => item.id === id);
    console.log(",af",JSON.parse(localStorage.getItem("news")));
    console.log(",af",article);
  return (
    
      <div className=" p-5 m-5" style={{width:"180%",height: "450px"}}>
          <article className="w-1/2 h-full flex-col bg-white p-2 shadow relative ">
              <div className='focus-green'>
                  <p className="p-3 text-xl text-blue-900 font-black font-serif whitespace-wrap">
                      <a href={article[0].url} target="_blank" className="hover:underline hover:text-black">{article[0].title}</a>
                  </p>
              </div> 
              
            <div className="flex flex-column">
            <img src={article[0].urlToImage} alt={`${article[0].title}.jpg`} className="w-1/2 h-1/2 bg-gray" />    
                  <div className="h-1/2 flex flex-col justify-between text-black text-xl font-light ml-4">
                      <p className=' text-lg md:text-base text-justify'>{article[0].description}</p>
                      <div className="text-sm absolute left-30 bottom-10" >
                          <p>Author : <span className='font-bold'> {article[0].author} </span></p>
                          <p> Source : <span className='font-bold'> {article[0].source.name}</span></p>                  
                      </div>
                      <p className="text-right p-3 font-bold absolute right-0 bottom-10">
                    <a href={article[0].url} target="_blank" className="uppercase text-base text-green-600 hover:text-blue">Check out the Source site →</a>
                  </p>
                </div>
              </div>
            </article>

      </div>
  )
}




export default Article;
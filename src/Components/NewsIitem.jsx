import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function NewsIitem(props) {
    
    const { article, handleLike, fav, layout } = props
    const [isFav, setIsFav] = useState(false);
    useEffect(() => { 
        if (fav.find((article) => article[0].id === id)) {
            setIsFav(true);
        }
    }, [isFav]);

    return (
   
        <div 
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
                    <div
                    onClick={() => {
                        handleLike(article.id);
                        setIsFav(!isFav);
                    }}
                      className="absolute top-0 right-0">
                      {isFav
                          ? 
                          (<div className="text-red-600">
                          <i className="fa-solid fa-heart"></i>
                        </div>)
                          :
                          (<button className="text-black">
                            <i className="fa-regular fa-heart"></i>
                            </button>)
                      }
                    </div>
                    <div className='focus-green'>
                      <p className="p-2 text-xl text-blue-900 font-black font-serif whitespace-pre-line">
                      <a href={article.url} target="_blank" className="hover:underline hover:text-black">{ article.title.slice(0,45)}...</a>
                      </p>
                    </div>  
                    <div className="flex flex-column">
                    <img src={article.urlToImage} alt={`${article.title}.jpg`} className="w-1/3 bg-gray" />    
                        <div className="h-4/5 flex flex-col justify-between text-xl font-light ml-4" x-show={`${layout} === 'list'`}>
                        <p className='text-black text-lg md:text-base text-justify'>{article.content}</p>
                          <p className="text-right font-bold absolute right-0 bottom-0">
                <Link
                  to={`news/${article.id}`}
                  state={{article}}
                  target="_blank"
                  className="uppercase text-base text-green-600 hover:text-blue">
                  
                  Read more →
                </Link>
                          </p>
                        </div>
                      </div>
                    </article>
        </div>
  )
}

const mapStateToProps = (state, ownprops) => {
    const { article, layout, handleLike,fav } = ownprops;
    return {
        article,
        layout,
        handleLike,
        fav
    }
}
export default connect(mapStateToProps)(NewsIitem);
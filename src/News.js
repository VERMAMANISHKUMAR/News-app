 function News(props)
{
    console.log(props)
          return(
                    <div className="news">
                     
                     <div className="news-img">
                    <img src={props.article.
urlToImage}/>
                     </div>
                     <h4>{props.article.title?.substring(0,50)}</h4>
                     <p>{props.article.description?.substring(0,70).concat("....")}<a href={props.article.url}>Read More</a></p>
                     <div className="source">
                         <p>Author : {props.article.author?.substring(0,10)}</p>
                         <p>{props.article.source.name}</p>
                      </div>
                    </div>
                    
          )
}

export default News;
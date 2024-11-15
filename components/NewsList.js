import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Newsitem from './Newsitem'

const NewsList = () => {

    const[articles,setArticles] = useState([])

    useEffect(()=>{
        const getArticles = async ()=> {
        const response =  await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33f1320e283d41f1b39d42750be3ad86');
        console.log(response)
        setArticles(response.data.articles)
        }
        getArticles()
    },[])
  return (
    <div>
        {articles.map(article=>{
            return (
                <Newsitem
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}/>
            )
        })}
    </div>
  )
}

export default NewsList
import { useEffect, useState } from "react"

import { Article } from "./Article"


import img1 from '../assets/images/gym.jpg'
import img2 from '../assets/images/futbol.jfif'
import img3 from '../assets/images/salto.jpg'



//
const apiKey = 'a72213c8e55c47188ee952f90113dd8b'
//   



export const ArticlesContainer = () => {

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])


  
  return (
    <section className="md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center"> 
 

  <h1>Últimas Noticias</h1>

      
    {
      // articles.map(article => 
      //   <Article 
      //     key={article.publishedAt}
      //     img={article.urlToImage}
      //     number='01'
      //     title={article.title}
      //     text={article.description}
      //   />)
    }


    
      <Article
        img={img1}
        number='01'
        title='10 tips para ti'
        text='10 pasos para poder tener un cuerpo  mejor y una salud impecable'
      />
      <Article
        img={img2}
        number='02'
        title='Gran paso'
        text='argentina pasa a la siguiente ronda destrozando a portugal 10-0'
      />
      <Article
        img={img3}
        number='03'
        title='nuevo record'
        text='nuevo record de salto con garrocha en 2024 con una altura de 6,16 metros'
      />

    </section>
  )
}
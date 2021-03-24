import React from 'react';
import Article from './Article'
import './HomePage.css'

const articles = [
    {id: 1,
    title: 'Co to jest coś?',
    author: 'Tomasz Jakiś',
    text: ' Zaimek nieokreślony, zastępujący nazwę dowolnego przedmiotu lub faktu bądź takiego, którego mówiący nie chce lub nie umie określić, np. Coś trzeba z tym zrobić.'
    },
    {id: 2,
    title: 'Co to jest nic?',
    author: 'Tomasz Nijaki',
    text: '«Zaimek rzeczowny, sygnalizujący, zwykle wraz ze słowem nie, nieistnienie obiektu lub zdarzenia o właściwościach określonych w danym zdaniu, np. Wieczorami już nic nie czytam.'
    },
    {id: 3,
    title: 'Co to jest wszystko?',
    author: 'Tomasz Wszystki',
    text: 'Zaimek komunikujący, że to, o czym mowa w zdaniu, dotyczy całej substancji lub zbiorowości nazywanej przez określany rzeczownik.'
},
]

const HomePage = () => {
    const artList = articles.map(article=>{
        return (
            <Article key={article.id} {...article}></Article>
        )
    })
    return ( 
        <div className="homePage">{artList}</div>
        
     );
}
 
export default HomePage;
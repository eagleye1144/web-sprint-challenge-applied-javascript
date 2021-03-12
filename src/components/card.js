import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div')
  const head = document.createElement('div')
  const aut = document.createElement('div')
  const imgCont = document.createElement('div')
  const img = document.createElement('img')
  const autName = document.createElement('span')

  card.classList.add('card')
  head.classList.add('headline')
  aut.classList.add('author')
  imgCont.classList.add('img-container')
  img.src = `${article.authorPhoto}`

  card.appendChild(head)
  card.appendChild(aut)
  aut.appendChild(imgCont)
  imgCont.appendChild(img)
  aut.appendChild(autName)

  head.textContent = `${article.headline}`
  autName.textContent= `${article.authorName}`

  card.addEventListener('click', () =>{
    console.log(`${article.headline}`)
  })

  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardContainer = document.querySelector(selector)
  const myArr = ["javascript", "bootstrap", "technology", "jquery","node"];

  axios.
  get('https://lambda-times-api.herokuapp.com/articles')
  .then((res) => {
    myArr.forEach((article) =>{
      res.data.articles[article].forEach(element =>{
        const newCard = Card(element)
        cardContainer.appendChild(newCard)
      })

    })

  })
  .catch((err) =>{
    console.log('error!', err)
  })
}

export { Card, cardAppender }

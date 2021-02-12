import axios from "axios";


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
  const myCard = document.createElement('div');
  const headLine = document.createElement('div');
  const author = document.createElement('div');
  const myImg = document.createElement('div');
  const img = document.createElement('img');
  const last = document.createElement('span');
  
  myCard.classList.add('card');
  headLine.classList.add('headline');
  author.classList.add('author');
  myImg.classList.add('img-container');
  img.setAttribute('src', article.authorPhoto);

  myCard.appendChild(headLine);
  myCard.appendChild(author);
  author.appendChild(myImg);
  author.appendChild(last);

  headLine.textContent = article.headline;
  last.textContent = `By ${article.authorName}`;

  myCard.addEventListener('click', (event) => {
    console.log(article.headline);
  }) 
   return myCard;

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
  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then((response) =>{
      const javascript = response.data.articles.javascript;
      const bootstrap = response.data.articles.bootstrap;
      const technology = response.data.articles.technology;
      const node = response.data.articles.node;
      const jquery = response.data.articles.jquery;

      const mySelector = document.querySelector(selector);

        javascript.forEach((item) =>{
          const newCard = Card(item);
          mySelector.append(newCard);

        })

        bootstrap.forEach((item) => {
          const newCard = Card(item);
          mySelector.append(newCard);
        })
        technology.forEach((item) => {
          const newCard = Card(item);
          mySelector.append(newCard);
        })
        node.forEach((item) => {
          const newCard = Card(item);
          mySelector.append(newCard);
        })
        jquery.forEach((item) => {
          const newCard = Card(item);
          mySelector.append(newCard);
        })
    })



}

export { Card, cardAppender }

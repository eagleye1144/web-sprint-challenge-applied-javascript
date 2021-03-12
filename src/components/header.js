const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const head = document.createElement('div')
  const date1 = document.createElement('span')
  const title1 = document.createElement('h1')
  const temp1 = document.createElement('span')

  head.classList.add('header')
  date1.classList.add('date')
  temp1.classList.add('temp')

  head.appendChild(date1)
  head.appendChild(title1)
  head.appendChild(title1)
  head.appendChild(temp1)

date1.textContent = `${date}`
title1.textContent = `${title}`
temp1.textContent = `${temp}`  

return head
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const header = document.querySelector(selector)
    const newHeader = Header('Lambda Times', "Mar 12th, 2021", "62°")
    header.appendChild(newHeader)
    
}

export { Header, headerAppender }

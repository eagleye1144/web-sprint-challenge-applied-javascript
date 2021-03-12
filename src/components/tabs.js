import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  // const tops = document.createElement('div')
  // const div1 = document.createElement('div')
  // const div2 = document.createElement('div')
  // const div3 = document.createElement('div')
  // const div4 = document.createElement('div')
  // const div5 = document.createElement('div')
  // tops.classList.add('tops')
  // div1.classList.add('tab')
  // div2.classList.add('tab')
  // div3.classList.add('tab')
  // div4.classList.add('tab')
  // div5.classList.add('tab')

  // tops.appendChild(div1)
  // tops.appendChild(div2)
  // tops.appendChild(div3)
  // tops.appendChild(div4)
  // tops.appendChild(div5)

  // div1.textContent = `${topics[0]}`
  // div2.textContent = `${topics[1]}`
  // div3.textContent = `${topics[2]}`
  // div4.textContent = `${topics[3]}`
  // div5.textContent = `${topics[4]}`
  const tops = document.createElement('div')
  tops.classList.add('topics')
  
  topics.forEach(element => {
    const item = document.createElement('div')
    item.textContent = `${element}`
    item.classList.add('tab')
    tops.appendChild(item)
 
  });

  
  return tops

}
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabContainer = document.querySelector(selector)
  axios.
    get('https://lambda-times-api.herokuapp.com/topics')
    .then(res =>{
      const myData = res.data.topics
      console.log(myData)
          const newTab = Tabs(myData)
          tabContainer.appendChild(newTab)
    
          
      
    })
    .catch((err) =>{
      console.log("error!", err)
    })
}

export { Tabs, tabsAppender }

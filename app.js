const baseUrl = 'https://swapi.co/api/'
const characterSection = document.querySelector('.characters')

// Write a function that GETs information about Luke Skywalker
  // and add his name to the page
getLuke()
getCharacters()




function getLuke() {

  fetch(baseUrl + 'people/1')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      // var name = data.name
      // console.log(data)

      // // Create an h2 that has the text of 
      // // Luke's name
      // var skywalker = document.createElement('h2')
      // skywalker.innerText = name

      // // Append that h2 to the section
      // // w/the class .characters
      // characterSection.appendChild(skywalker)
      var name = data.name
      var colorHair = data.hair_color
      var howTall = data.height
      var skywalker = document.createElement('h2')
      skywalker.innerText = name

      var hairLi = document.createElement('li')
      var heightLi = document.createElement('li')
      hairLi.textContent = colorHair
      heightLi.textContent = howTall

      var attributes = document.querySelector('.attributes')

      // skywalker.innerText = colorHair
      // skywalker.innerText = howTall
      // console.log(skywalker)
      characterSection.insertBefore(skywalker, attributes)
      attributes.appendChild(hairLi)
      attributes.appendChild(heightLi)

    })

}

// Modify the getLuke function to also add:
  // Luke's hair color
  // Luke's height
// Append these attributes as text in a <li>
// to the ul with the class of 'attributes'


// Uh oh, Luke's attributes are ABOVE his name!?
  // Explain why this happened
  // Modify the getLuke function to ensure Luke's attributes are below his name


// Write a function called getCharacters that:
  // Makes a fetch request to the baseUrl + 'people/ endpoint
  // console.log the resulting response

// getCharacters()

function getCharacters() {

  fetch(baseUrl + 'people')
    .then(function (response) {
      return response.json()
    })
    .then(function (people) {
      console.log(people)
      // Write a loop
      var peopleArray = people.results
      for (var i = 0; i < peopleArray.length; i++) {
        var person = people.results[i]

        var name = person.name
        var hairColor = person.hair_color
        var height = person.height
       
        var html = `
          <section>
            <h3>${name}</h3>
            <ul>
              <li>Hair: ${hairColor}</li>
              <li>Height: ${height}cm</li>
            </ul>
          </section>
        `

        characterSection.innerHTML += html

      }
      var nextUrl = people.next
      return nextUrl
    })
    .then(function(urlFromAPI) {
      console.log('THEN URL', urlFromAPI)
      // IMPLEMENT getMoreCharacters here

      getMoreCharacters(urlFromAPI)


    })
}

// function getCharacters() {
//   fetch(baseUrl + 'people')
//     .then(function (response) {
//       return response.json()
//     })
//     .then(function (people) {
//       var peopleArray = people.results
//       console.log(peopleArray)

//       for (let i = 0; i < peopleArray.length; i++) {
//         var person = people.results[i]

//         // Assign attributes to variables
//         var name = person.name
//         var colorHair = person.hair_color
//         var howTall = person.height

//         var h3 = document.createElement('h3')
//         h3.textContent = name

//         var hairLI = document.createElement('li')
//         var heightLI = document.createElement('li')
//         hairLI.textContent = colorHair
//         heightLI.textContent = howTall
//         characterSection.prepend(h3)

//         h3.appendChild(hairLI)
//         h3.appendChild(heightLI)
//       }
//     })
// }


// Modify the getCharacters function to loop through the results
  // console.log each character in the array
    // (see what you're working with)
  // Capture each character's attributes in variables:
    // name
    // hair color
    // height
  // console.log each variable

var myName = 'Matt'

// console.log('Hello ' + myName + '.')
// console.log(`Hello ${myName}.`)

// Modify the getCharacters function to append a section for each character
  // Container element (<div> or <section>)
  // <h3> with the character's name
  // <ul> with  <li>s for hair color and height
  // Check out the innerHTML method

// ---------- NESTED FETCH REQUESTS / PASSING DATA TO NEXT .THEN ----------

// Write a function called getMoreCharacters that:
  // Accepts a url as an input
  // Makes a fetch requests to that url
  // console.logs the result

function getMoreCharacters(url) {

  fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(people) {
      console.log('From getMoreCharacters', people)
      
    })
}


// Refactor the getCharacters function to:
  // Return the url of the next page of characters to another .then
  // Call the getMoreCharacters function and pass it the url


// Modify the getMoreCharacters function to:
  // Append sections to the DOM similar to the getCharacters function
    // Container element (<div> or <section>)
    // <h3> with the character's name
    // <ul> with  <li>s for hair color and height
    // Check out the innerHTML method


// ---------- REFACTOR FETCH REQUESTS TO USE ES6 SYNTAX ----------

// Refactor the getLuke function to use:
  // Fat arrow functions
  // Implicit returns


// Refactor the getCharacters function to use:
  // Fat arrow functions
  // Implicit returns


// ---------- REFACTOR FETCH REQUESTS TO USE NAMED FUNCTIONS ----------


// Refactor the getLuke function to use:
  // Named callback functions


// Refactor the getCharacters function to use:
  // Named callback functions
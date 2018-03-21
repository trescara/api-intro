const baseUrl = 'https://swapi.co/api/'
const characterSection = document.querySelector('.characters')

// Write a function that GETs information about Luke Skywalker
  // and add his name to the page
getLuke()


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
      // console.log(people)
      // Write a loop
      var peopleArray = people.results
      for (var i = 0; i < peopleArray.length; i++) {

        console.log(people.results[i]);

        var person = people.results[i]
        var name = person.name
        var h3 = document.createElement('h3')
        h3.textContent = name
        characterSection.appendChild(h3)

      }
    })
}

// Modify the getCharacters function to loop through the results
  // console.log each character in the array
    // (see what you're working with)
  // Capture each character's attributes in variables:
    // name
    // hair color
    // height
  // console.log each variable


// Modify the getCharacters function to append a section for each character
  // Container element (<div> or <section>)
  // <h3> with the character's name
  // <ul> with  <li>s for hair color and height
  // Check out the innerHTML method
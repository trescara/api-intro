const baseUrl = 'https://swapi.co/api/'
const characterSection = document.querySelector('.characters')

// Write a function that GETs information about Luke Skywalker and add his name to the page
getLuke()


function getLuke() {

  fetch(baseUrl + 'people/1')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      var name = data.name

      // Create an h2 that has the text of 
      // Luke's name
      var skywalker = document.createElement('h2')
      skywalker.innerText = name

      // Append that h2 to the section
      // w/the class .characters
      characterSection.appendChild(skywalker)
    })

}

// Modify the getLuke function to also add:
  // Luke's hair color
  // Luke's height
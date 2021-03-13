window.addEventListener('load', () => {
  const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

  fetch(requestURL)

    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing

      const prophets = jsonObject['prophets'];
      for (let i = 0; i < prophets.length; i++) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let date = document.createElement('p');
        let place = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        date.textContent = "Date of Birth: " + prophets[i].birthdate;
        place.textContent = "Place of Birth: " + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);

        card.appendChild(name);
        card.appendChild(date);
        card.appendChild(place);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);

        

      }
    });




}); 
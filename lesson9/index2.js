window.addEventListener('load', ()=>{
    const hambutton = document.querySelector('.ham'); // grabs a class named ham and names it hambutton
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);

    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');}; //when the windows are a certain size, make the responsive off in case it is on.
// --------------------------------------------- for the date
    // const currentDate = document.querySelector(".date");
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();
    // var d = new Date();
    // var weekday = new Array(7);
    // weekday[0] = "Sunday";
    // weekday[1] = "Monday";
    // weekday[2] = "Tuesday";
    // weekday[3] = "Wednesday";
    // weekday[4] = "Thursday";
    // weekday[5] = "Friday";
    // weekday[6] = "Saturday";

    // var n = weekday[d.getDay()];

    // today = n + ', ' + mm + '/' + dd + '/' + yyyy;
    // currentDate.textContent = today;
// --------------------------------------------- for the copyrightyear
    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();

// --------------------------------------------- for the banner that only shows on Fridays


    var currentTime = new Date()
    var day = currentTime.getDate()
    if(day != 5)
    {
        document.getElementById("banner").style.display = 'none';
    }
    else {
        document.getElementById("banner").style.display = 'block';
}

// --------------------------------------------- 

// const high = document.querySelector(".high").innerHTML;
// const speed = document.querySelector(".speed").innerHTML;
// const chill = document.querySelector(".chill");

// var wChill = Math.round(35.74 + (0.6215 * high) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * high * Math.pow(speed,0.16)));
// chill.textContent = wChill;

// });


// --------------------------------------------- Lazy Loading

// window.addEventListener('load',(event)=>{
//     lazyLoad();
// });
// function lazyLoad() {
//     const images = document.querySelectorAll("[data-src]");
//     for(const image of images){
//         image.src = image.getAttribute("data-src");
//     }
//     //transferred the data of data-src to image
//     // console.log(images);
// }

// -----------------------------------------------

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
        // console.table(jsonObject); // temporary checking for valid response and data parsing

        let town = document.createElement('section');
        let name = document.createElement('h3');
        let motto = document.createElement('h4');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let events = document.createElement('p');

        }
        for (let i = 0; i = 1; i++) {
            // console.table(jsonObject); // temporary checking for valid response and data parsing
    
            let town = document.createElement('section');
            let name = document.createElement('h3');
            let motto = document.createElement('h4');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let events = document.createElement('p');
    
    
            name.innerHTML = towns[1].name
            motto.innerHTML = towns[1].motto;
            yearFounded.innerHTML = '<strong>Year Founded: </strong>' + towns[1].yearFounded;
            currentPopulation.innerHTML = '<strong>Population: </strong>' + towns[1].currentPopulation;
            averageRainfall.innerHTML = '<strong>Average Rainfall: </strong>' + towns[1].averageRainfall;
            // events.innerHTML = '<strong>Events: </strong>' + towns[i].events; 
    
            
            // if (person.marriage.children < 0)
            // {
            //     children.removeChild('p');
            // }
            
    
            // image.setAttribute('src', "https://thispersondoesnotexist.com/image");
                
            town.appendChild(name);
            town.appendChild(motto);
            town.appendChild(yearFounded);
            town.appendChild(currentPopulation);
            town.appendChild(averageRainfall);
            // town.appendChild(events);
    
                
            document.querySelector('div.town1').appendChild(town);
    
            }
                   for (let i = 0; i = 5; i++) {
        // console.table(jsonObject); // temporary checking for valid response and data parsing

        let town = document.createElement('section');
        let name = document.createElement('h3');
        let motto = document.createElement('h4');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let events = document.createElement('p');


        name.innerHTML = towns[5].name
        motto.innerHTML = towns[5].motto;
        yearFounded.innerHTML = '<strong>Year Founded: </strong>' + towns[5].yearFounded;
        currentPopulation.innerHTML = '<strong>Population: </strong>' + towns[5].currentPopulation;
        averageRainfall.innerHTML = '<strong>Average Rainfall: </strong>' + towns[5].averageRainfall;
        // events.innerHTML = '<strong>Events: </strong>' + towns[i].events; 

        
        // if (person.marriage.children < 0)
        // {
        //     children.removeChild('p');
        // }
        

        // image.setAttribute('src', "https://thispersondoesnotexist.com/image");
            
        town.appendChild(name);
        town.appendChild(motto);
        town.appendChild(yearFounded);
        town.appendChild(currentPopulation);
        town.appendChild(averageRainfall);
        // town.appendChild(events);

            
        document.querySelector('div.town2').appendChild(town);

        }
    });













});
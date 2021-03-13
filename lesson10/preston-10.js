window.addEventListener('load', ()=>{
    const hambutton = document.querySelector('.ham'); // grabs a class named ham and names it hambutton
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);

    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');}; //when the windows are a certain size, make the responsive off in case it is on.
// --------------------------------------------- for the date
    const currentDate = document.querySelector(".date");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];

    today = n + ', ' + mm + '/' + dd + '/' + yyyy;
    currentDate.textContent = today;
// --------------------------------------------- for the copyrightyear
    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();

// --------------------------------------------- for the banner that only shows on Fridays


    var currentTime = new Date()
    var day = currentTime.getDate()
    if(day != 5)
    {
        document.getElementById("banner").style.display = 'block';
    }
    else {
        document.getElementById("banner").style.display = 'none';
}

// --------------------------------------------- 

// const high = document.querySelector(".high").innerHTML;
// const speed = document.querySelector(".speed").innerHTML;
// const chill = document.querySelector(".chill");

// var wChill = Math.round(35.74 + (0.6215 * high) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * high * Math.pow(speed,0.16)));
// chill.textContent = wChill;

// });


// --------------------------------------------- Lazy Loading

window.addEventListener('load',(event)=>{
    lazyLoad();
});
function lazyLoad() {
    const images = document.querySelectorAll("[data-src]");
    for(const image of images){
        image.src = image.getAttribute("data-src");
    }
    //transferred the data of data-src to image
    // console.log(images);
}

//----------------------------------------------- Temparature
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6f16444b6f9dc85d238029a2d54a5e18&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementsByClassName('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementsByClassName('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementsByClassName('icon').setAttribute('alt', desc);


}); 





//----------------------------------------------- Forecast
}); 





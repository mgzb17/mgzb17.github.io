window.addEventListener('load', ()=>{
    const hambutton = document.querySelector('.ham'); // grabs a class named ham and names it hambutton
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);

    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');}; //when the windows are a certain size, make the responsive off in case it is on.
});


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

// ----------------------------------------------
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6f16444b6f9dc85d238029a2d54a5e18&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

}); 
// ----------------------------------------------
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6f16444b6f9dc85d238029a2d54a5e18&units=imperial";
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
//     document.getElementById('current-temp1').textContent = jsObject.main.temp;

// const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);

// }); 
// // ----------------------------------------------
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6f16444b6f9dc85d238029a2d54a5e18&units=imperial";
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
//     document.getElementById('current-temp2').textContent = jsObject.main.temp;

// const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);

// }); 
// // ----------------------------------------------
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6f16444b6f9dc85d238029a2d54a5e18&units=imperial";
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
//     document.getElementById('current-temp3').textContent = jsObject.main.temp;

// const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);

// }); 
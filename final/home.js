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
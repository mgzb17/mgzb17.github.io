window.addEventListener('load',(event)=> {
    newJoke();
}); 
function newJoke(){ //this one will grab an element and clears it out first
    const dad_id = document.getElementById('dad-joke');
    dad_id.innerHTML = "";
    dad_id.classList.remove('small');

    const joke = getDadJoke() 
    .then(function(j){ //this is a promise. 
        dad_id.innerHTML = j['joke'];
        if(j['joke'].length > 85){
            dad_id.classList.add('small'); //if the joke is too long, it'll make the font size smaller.
        }
    })
    .catch(function(e){
        dad_id.innerHTML = e;
    })
}

async function getDadJoke(){ //sometimes you don't use headers at all. just depends on the API used.
    const url = 'https://icanhazdadjoke.com';
    let h = new Headers({
        "Accept"        : "application/json",
        "User-Agent"    : "WDD-230-Test User Agent https://mgzb17.github.io"
    });
    const response = await fetch(url,{headers:h}); //waiting for a response
    if(response.status == 200){
        return response.json();
    }
    else {
        throw new Error('No dad jokes found: '+response.status); //if there's an error it will catch it and display it. line 16
    }
}
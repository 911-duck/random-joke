const BUTTON = document.querySelector("button")
const SPAN = document.querySelector("p")

async function generate(){
    let data = await fetch('https://official-joke-api.appspot.com/random_joke')
    data = await data.json()
    return data
}

function display(joke){
    SPAN.innerHTML += "<br>- (" + joke.type + ") " +joke.setup
    setTimeout(()=>{SPAN.innerHTML += "<br>"+joke.punchline+"<br>"
BUTTON.addEventListener('click',listener)

    },1000)
}

async function listener(){
BUTTON.removeEventListener('click',listener)

    display(await generate())
}

BUTTON.addEventListener('click',listener)

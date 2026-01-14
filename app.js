const BUTTON = document.querySelector("button")
const SPAN = document.querySelector("p")

async function generate(){
    let data = await fetch('https://official-joke-api.appspot.com/random_joke')
    data = await data.json()
    return data
}

function display(joke){
    SPAN.innerHTML = "(" + joke.type + ") " +joke.setup
    setTimeout(()=>{SPAN.innerHTML += "<br>"+joke.punchline},1000)
}

BUTTON.addEventListener('click',async e=>{
    display(await generate())
})
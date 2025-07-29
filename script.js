const url = "https://icanhazdadjoke.com";

const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");


jokeBtn.addEventListener('click', ()=>generateJoke())



async function generateJoke() {
  const config = {
    headers: { Accept: "application/json" },
    };
    
    try {
        jokeBtn.disable = true
        joke.innerHTML = "Loading...."
        const res = await fetch(url, config)
        const data = await res.json()
        joke.innerHTML = data.joke
    } catch (e) {
        console.log(e)
    }
    finally {
        jokeBtn.disable=false
    }

    
    
}

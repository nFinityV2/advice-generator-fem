const content = document.getElementById("content");
const btnQuote = document.getElementById("btn-quote");

const quote = async() => {
    try {
        const res = await fetch(`https://api.adviceslip.com/advice`);
        const json = await res.json();
        
        content.innerHTML = 
        `
        <p class="advice-id" id="advice">Advice #${json.slip.id}</p>
        <h1 class="quote">"${json.slip.advice}"</h1>
        `
    } catch (error) {
        console.warn(error);
    }
}

btnQuote.addEventListener("click", quote);
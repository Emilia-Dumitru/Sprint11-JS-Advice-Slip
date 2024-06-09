const textAdvice = document.getElementById("advice-text");

async function getAdvice() {
    const url = "https://api.adviceslip.com/advice";

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        renderAdvice(data.slip.id, data.slip.advice);
    }
    catch (e) {
        console.log(e)
    }
}

function renderAdvice(id, advice) {
    textAdvice.innerHTML = `Advice #${id} <br> ${advice}`;
}
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("dice-button");
    button.addEventListener('click', getAdvice);
});


const textAdviceElement = document.getElementById("advice-text");

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
    textAdvice.innerHTML = `<span id="advice-id"> Advice #${id} </span><br> ${advice}`;
    textAdvice.classList.add("active")
    tellMeAnAdvice(advice)

}
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("dice-button");
    button.addEventListener('click', getAdvice);
});

function tellMeAnAdvice(advise) {
    VoiceRSS.speech({
        key: "52bfbd75e1c24955831329926a53c5ed",
        src: advise,
        hl: "en-us",
        v: "Nancy",
        r: 0,
        c: "mp3",
        f: "44khz_16bit_stereo",
        ssml: false,
    });
};




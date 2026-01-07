
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");


const currentYear = new Date().getFullYear();
const nextYear = new Date("2027");
updateCounter();

function updateCounter() {


    const currentTime = new Date();
    const diff = nextYear - currentTime;

    const daysleft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursleft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesleft = Math.floor(diff / 1000 / 60) % 60;
    const secondsleft = Math.floor(diff / 1000) % 60;




    days.innerText = daysleft;
    hours.innerText = hoursleft < 10 ? "0" + hoursleft : hoursleft;
    minutes.innerText = minutesleft < 10 ? "0" + minutesleft : minutesleft;
    seconds.innerText = secondsleft < 10 ? "0" + secondsleft : secondsleft;


}

setInterval(updateCounter, 1000);





// const btn = document.querySelector("#gift");


// const words = ["Жаңа жыл құтты болсын!", "Happy New Year!", "Frohes neues Jahr!", "С Новым годом!", " Bonne Année!"];

// document.getElementById("gift").addEventListener("click", (e) => {
//     const word = document.createElement("div");
//     word.className = "word";
//     word.textContent = words[Math.floor(Math.random() * words.length)];

//     word.style.left = e.clientX + "px";
//     word.style.top = e.clientY + "px";

//     document.body.appendChild(word);

//     setTimeout(() => word.remove(), 1200);
// });


function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 90 + 'vw'
    snowflake.style.animationDuration = Math.random() * 3 + 7 + 's'
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'
    document.querySelector('.snowflakes').appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 7000)

}
setInterval(createSnowflake, 300)
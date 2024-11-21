let front = document.getElementById("front_coin");
let back = document.getElementById("back_coin");
let flipSound = document.getElementById("flipSound");

front.addEventListener("click", function () {
    flipCoin();
});

back.addEventListener("click", function () {
    flipCoin();
});

function flipCoin() {
    flipSound.play();
    if (Math.random() > 0.5){
        setTimeout(() => {
            back.classList.remove("animation_rotate");
        }, 800);
        back.style.display = "flex";
        front.style.display = "none";
        back.classList.add("animation_rotate");
    } else {
        setTimeout(() => {
            front.classList.remove("animation_rotate");
        }, 800);
        front.style.display = "flex";
        back.style.display = "none";
        front.classList.add("animation_rotate");
    }

}

// script.js
alert("JavaScript is working! ❤️");
// Get all screens
const screens = document.querySelectorAll(".screen");

// Show one screen and hide the others
function showScreen(screenId) {
screens.forEach((screen) => {
screen.classList.remove("active");
});

```
document
    .getElementById(screenId)
    .classList.add("active");
```

}

// Store selected date details
let selectedDay = "";
let selectedTime = "";
let selectedCafe = "";

// Welcome screen
document
.getElementById("continue-button")
.addEventListener("click", () => {
showScreen("question-screen");
});

// Yes button
document
.getElementById("yes-button")
.addEventListener("click", () => {
showScreen("celebration-screen");
createConfetti();
});

// No button
const noButton = document.getElementById("no-button");

function moveNoButton() {

```
const x =
    Math.floor(Math.random() * 220) - 110;

const y =
    Math.floor(Math.random() * 160) - 80;

noButton.style.transform =
    `translate(${x}px, ${y}px)`;
```

}

// For laptop
noButton.addEventListener(
"mouseenter",
moveNoButton
);

// For mobile
noButton.addEventListener(
"touchstart",
(event) => {
event.preventDefault();
moveNoButton();
}
);

// Plan date button
document
.getElementById("plan-button")
.addEventListener("click", () => {
showScreen("day-screen");
});

// Day selection
document
.querySelectorAll(".day-choice")
.forEach((button) => {

```
    button.addEventListener(
        "click",
        () => {

            selectedDay =
                button.dataset.day;

            showScreen(
                "time-screen"
            );

        }
    );

});
```

// Time selection
document
.querySelectorAll(".time-choice")
.forEach((button) => {

```
    button.addEventListener(
        "click",
        () => {

            selectedTime =
                button.dataset.time;

            showScreen(
                "cafe-screen"
            );

        }
    );

});
```

// Café selection
document
.querySelectorAll(".cafe-choice")
.forEach((button) => {

```
    button.addEventListener(
        "click",
        () => {

            selectedCafe =
                button.dataset.cafe;

            document
                .getElementById(
                    "final-day"
                )
                .textContent =
                selectedDay;

            document
                .getElementById(
                    "final-time"
                )
                .textContent =
                selectedTime;

            document
                .getElementById(
                    "final-cafe"
                )
                .textContent =
                selectedCafe;

            showScreen(
                "final-screen"
            );

            createConfetti();

        }
    );

});
```

// Final button
document
.getElementById("final-button")
.addEventListener("click", () => {

```
    document
        .getElementById(
            "final-response"
        )
        .textContent =
        "Yay! I can't wait to see you ❤️☕🌹";

    createConfetti();

});
```

// Floating hearts
const heartContainer =
document.getElementById(
"heart-container"
);

function createHeart() {

```
const heart =
    document.createElement("div");

heart.classList.add("heart");

const heartSymbols = [
    "❤️",
    "💕",
    "💗",
    "🌸",
    "✨"
];

heart.textContent =
    heartSymbols[
        Math.floor(
            Math.random()
            *
            heartSymbols.length
        )
    ];

heart.style.left =
    Math.random()
    *
    100
    +
    "vw";

heart.style.fontSize =
    15
    +
    Math.random()
    *
    25
    +
    "px";

heart.style.animationDuration =
    5
    +
    Math.random()
    *
    5
    +
    "s";

heartContainer.appendChild(
    heart
);

setTimeout(
    () => {
        heart.remove();
    },
    10000
);
```

}

// Create a floating heart
// every 700 milliseconds
setInterval(
createHeart,
700
);

// Confetti animation
function createConfetti() {

```
const symbols = [
    "❤️",
    "🌸",
    "✨",
    "💕",
    "🌷"
];

for (
    let i = 0;
    i < 45;
    i++
) {

    const confetti =
        document.createElement(
            "div"
        );

    confetti.textContent =
        symbols[
            Math.floor(
                Math.random()
                *
                symbols.length
            )
        ];

    confetti.style.position =
        "fixed";

    confetti.style.left =
        Math.random()
        *
        100
        +
        "vw";

    confetti.style.top =
        "-30px";

    confetti.style.fontSize =
        18
        +
        Math.random()
        *
        18
        +
        "px";

    confetti.style.zIndex =
        "100";

    confetti.style.transition =
        "transform 2.5s ease-in, opacity 2.5s";

    document.body.appendChild(
        confetti
    );

    setTimeout(
        () => {

            confetti.style.transform =
                "translateY(110vh) rotate(720deg)";

            confetti.style.opacity =
                "0";

        },
        50
    );

    setTimeout(
        () => {
            confetti.remove();
        },
        3000
    );

}
```

}

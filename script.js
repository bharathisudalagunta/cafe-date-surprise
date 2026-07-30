// script.js

// --------------------------------
// GET ALL SCREENS
// --------------------------------

const screens =
document.querySelectorAll(".screen");

// --------------------------------
// SHOW A SCREEN
// --------------------------------

function showScreen(screenId) {

```
screens.forEach(
    function(screen) {

        screen.classList
            .remove("active");

    }
);

document
    .getElementById(screenId)
    .classList
    .add("active");
```

}

// --------------------------------
// STORE DATE CHOICES
// --------------------------------

let selectedDay = "";
let selectedTime = "";
let selectedCafe = "";

// --------------------------------
// WELCOME BUTTON
// --------------------------------

document
.getElementById("continue-button")
.addEventListener(
"click",
function() {

```
        showScreen(
            "question-screen"
        );

    }
);
```

// --------------------------------
// YES BUTTON
// --------------------------------

document
.getElementById("yes-button")
.addEventListener(
"click",
function() {

```
        showScreen(
            "celebration-screen"
        );

        createConfetti();

    }
);
```

// --------------------------------
// MOVE THE NO BUTTON
// --------------------------------

const noButton =
document.getElementById(
"no-button"
);

function moveNoButton() {

```
const card =
    document.querySelector(
        ".card"
    );

const cardWidth =
    card.clientWidth;

const cardHeight =
    card.clientHeight;

const buttonWidth =
    noButton.offsetWidth;

const buttonHeight =
    noButton.offsetHeight;


// Random position inside card

const randomX =
    Math.random()
    *
    (
        cardWidth
        -
        buttonWidth
        -
        50
    )
    -
    (
        cardWidth
        /
        2
    )
    +
    80;


const randomY =
    Math.random()
    *
    180
    -
    90;


noButton.style.position =
    "relative";


noButton.style.left =
    randomX
    +
    "px";


noButton.style.top =
    randomY
    +
    "px";
```

}

// Laptop / mouse

noButton.addEventListener(
"mouseenter",
moveNoButton
);

// Mobile / touch

noButton.addEventListener(
"touchstart",
function(event) {

```
    event.preventDefault();

    moveNoButton();

}
```

);

// If clicked

noButton.addEventListener(
"click",
moveNoButton
);

// --------------------------------
// PLAN DATE BUTTON
// --------------------------------

document
.getElementById("plan-button")
.addEventListener(
"click",
function() {

```
        showScreen(
            "day-screen"
        );

    }
);
```

// --------------------------------
// SELECT DAY
// --------------------------------

const dayButtons =
document.querySelectorAll(
".day-choice"
);

dayButtons.forEach(
function(button) {

```
    button.addEventListener(
        "click",
        function() {

            selectedDay =
                button.dataset.day;

            showScreen(
                "time-screen"
            );

        }
    );

}
```

);

// --------------------------------
// SELECT TIME
// --------------------------------

const timeButtons =
document.querySelectorAll(
".time-choice"
);

timeButtons.forEach(
function(button) {

```
    button.addEventListener(
        "click",
        function() {

            selectedTime =
                button.dataset.time;

            showScreen(
                "cafe-screen"
            );

        }
    );

}
```

);

// --------------------------------
// SELECT CAFÉ
// --------------------------------

const cafeButtons =
document.querySelectorAll(
".cafe-choice"
);

cafeButtons.forEach(
function(button) {

```
    button.addEventListener(
        "click",
        function() {

            selectedCafe =
                button.dataset.cafe;


            // Add selections
            // to final screen

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

}
```

);

// --------------------------------
// FINAL BUTTON
// --------------------------------

document
.getElementById("final-button")
.addEventListener(
"click",
function() {

```
        document
            .getElementById(
                "final-response"
            )
            .textContent =
            "Yay! I can't wait to see you ❤️☕🌹";


        createConfetti();

    }
);
```

// --------------------------------
// FLOATING HEARTS
// --------------------------------

const heartContainer =
document.getElementById(
"heart-container"
);

function createHeart() {

```
const heart =
    document.createElement(
        "div"
    );


heart.classList
    .add("heart");


const hearts = [
    "❤️",
    "💕",
    "💗",
    "🌸",
    "✨"
];


heart.textContent =
    hearts[
        Math.floor(
            Math.random()
            *
            hearts.length
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


heartContainer
    .appendChild(
        heart
    );


setTimeout(
    function() {

        heart.remove();

    },
    10000
);
```

}

// Create a heart regularly

setInterval(
createHeart,
700
);

// --------------------------------
// SIMPLE CONFETTI
// --------------------------------

function createConfetti() {

```
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
        [
            "❤️",
            "🌸",
            "✨",
            "💕",
            "🌷"
        ][
            Math.floor(
                Math.random()
                *
                5
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


    document.body
        .appendChild(
            confetti
        );


    setTimeout(
        function() {

            confetti.style.transform =
                "translateY(110vh) rotate(720deg)";


            confetti.style.opacity =
                "0";

        },
        50
    );


    setTimeout(
        function() {

            confetti.remove();

        },
        3000
    );

}
```

}

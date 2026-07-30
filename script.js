const screens =
document.querySelectorAll(".screen");


function showScreen(screenId) {

    screens.forEach(
        function(screen) {

            screen.classList.remove(
                "active"
            );

        }
    );


    document
    .getElementById(screenId)
    .classList.add("active");

}


let selectedDay = "";

let selectedTime = "";

let selectedCafe = "";



/* OPEN SURPRISE */

document
.getElementById(
    "continue-button"
)
.addEventListener(
    "click",
    function() {

        showScreen(
            "question-screen"
        );

    }
);



/* YES */

document
.getElementById(
    "yes-button"
)
.addEventListener(
    "click",
    function() {

        showScreen(
            "celebration-screen"
        );

        createConfetti();

    }
);



/* MOVING NO BUTTON */

const noButton =
document.getElementById(
    "no-button"
);


function moveNoButton() {

    const x =
    Math.floor(
        Math.random() * 220
    ) - 110;


    const y =
    Math.floor(
        Math.random() * 150
    ) - 75;


    noButton.style.transform =
    "translate(" +
    x +
    "px, " +
    y +
    "px)";

}


noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


noButton.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);



/* PLAN DATE */

document
.getElementById(
    "plan-button"
)
.addEventListener(
    "click",
    function() {

        showScreen(
            "day-screen"
        );

    }
);



/* SELECT DAY */

document
.querySelectorAll(
    ".day-choice"
)
.forEach(
    function(button) {

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
);



/* SELECT TIME */

document
.querySelectorAll(
    ".time-choice"
)
.forEach(
    function(button) {

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
);



/* SELECT CAFÉ */

document
.querySelectorAll(
    ".cafe-choice"
)
.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

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

    }
);



/* FINAL BUTTON */

document
.getElementById(
    "final-button"
)
.addEventListener(
    "click",
    function() {

        document
        .getElementById(
            "final-response"
        )
        .textContent =
        "Yay! I’m already looking forward to our date ❤️☕🌹";


        createConfetti();

    }
);



/* FLOATING HEARTS */

const heartContainer =
document.getElementById(
    "heart-container"
);


function createHeart() {

    const heart =
    document.createElement(
        "div"
    );


    heart.classList.add(
        "heart"
    );


    const symbols = [

        "❤️",

        "💕",

        "🌸",

        "✨"

    ];


    heart.textContent =

    symbols[

        Math.floor(

            Math.random()

            *

            symbols.length

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

    18

    +

    "px";


    heart.style.animationDuration =

    7

    +

    Math.random()

    *

    4

    +

    "s";


    heartContainer.appendChild(
        heart
    );


    setTimeout(
        function() {

            heart.remove();

        },
        11000
    );

}


setInterval(
    createHeart,
    1400
);



/* CONFETTI */

function createConfetti() {

    const symbols = [

        "❤️",

        "🌸",

        "✨",

        "💕"

    ];


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const item =
        document.createElement(
            "div"
        );


        item.textContent =

        symbols[

            Math.floor(

                Math.random()

                *

                symbols.length

            )

        ];


        item.style.position =
        "fixed";


        item.style.left =

        Math.random()

        *

        100

        +

        "vw";


        item.style.top =
        "-30px";


        item.style.fontSize =
        "22px";


        item.style.zIndex =
        "100";


        item.style.transition =
        "transform 2.8s ease-in, opacity 2.8s";


        document.body.appendChild(
            item
        );


        setTimeout(
            function() {

                item.style.transform =

                "translateY(110vh) rotate(720deg)";


                item.style.opacity =
                "0";

            },
            50
        );


        setTimeout(
            function() {

                item.remove();

            },
            3000
        );

    }

}

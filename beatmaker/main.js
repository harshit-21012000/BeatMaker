window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visuals = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);

        });
    });

    //     const createBubble = index => {

    //         const bubble = document.createElement("div");
    //         visuals.appendChild(bubble);
    //         bubble.style.backgroundColor = colors[index];
    //         bubble.style.animation = `jump 1s ease`;

    //         bubble.addEventListener("animationed", function () {
    //             visuals.removeChild(this);
    //         });
    //     };



    // });

    const createBubble = index => {
        //Create bubbles
        const bubble = document.createElement("div");
        visuals.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function () {
            visuals.removeChild(this);
        });
    };
});
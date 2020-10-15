window.addEventListener("load", ()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    const color = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    pads.forEach((pad,index)=>{
        pad.addEventListener("click",function(){
            sounds[index].currentTime =0;
            sounds[index].play();
            bubbles(index);
        });
    });


    //for creating Bubbles
    function bubbles(index){
        bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        });
    };
});
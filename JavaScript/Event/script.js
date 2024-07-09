// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log("btn1 was clicked");
//     let a = 5;
//     a++;
//     console.log(a);
//     console.log(evt)
// };

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 1")
// });

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 2")
// });

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 3")
// });
// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 4")
// });

//create a toggle button that changes the dcreen to dark - mode when clicked & light-mode  when clicked again.

let modeBtn = document.querySelector("#mode");

let currMode = "light";

modeBtn.addEventListener("click", () => {
    console.log("you are trying to change mode");
    if(currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode)
});

let inp = document.querySelector("#text");
let p = document.querySelector("p");
let btn = document.querySelector("button");

inp.addEventListener("input", function () {
    console.log(inp.value);

    btn.addEventListener("click", function () {
        p.innerText = inp.value;
    });
});
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// Addition of task is going on
btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;


    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("delete");
    

    item.appendChild(dltbtn);
    ul.appendChild(item);
    inp.value = "";

});

// This is used for deleting the existing value in HTML only

// let dltbtns = document.querySelectorAll(".delete");
// for (dltbtn of dltbtns) {
//     dltbtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }


//  Using Event Delegation Deletion of task is performing
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();  /// Navigation
        console.log("deleted");
    }
});
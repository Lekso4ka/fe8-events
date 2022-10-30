/*
    q 4.3
*/

// document.querySelector("#square").addEventListener("click", function() {
//     this.style.opacity = 0;
// });

document.querySelector("#square").addEventListener("click", e => {
    e.target.style.opacity = 0;
}, {once: true});

/*
    q 4.6
*/
document.querySelector("#square").addEventListener("click", e => {
    const w = e.target.offsetWidth,
          h = e.target.offsetHeight;
    e.target.style.width = w * 0.9 + "px";
    e.target.style.height = h * 0.9 + "px";
});

/*
    10 - x
    50 - 100%

    x * 50 = 10 * 100


    -10% => (100% - 10%) / 100%
*/



/*
    q 4.7
*/

document.querySelector(".copy").addEventListener("click", function(e) {
    let copy = e.target.cloneNode(true);
    document.body.append(copy);
}); 

/*
    q 4.8
*/
const list = document.querySelectorAll("p");
list.forEach(p => {
    p.addEventListener("click", function() {
        this.innerText = ++this.innerText;
    });
});


/*
    q 4.9
*/
const d1 = document.querySelector("#div1"),
      d2 = document.querySelector("#div2")

let items = document.querySelectorAll("#div1 p, #div2 p");
items.forEach(p => {
    p.addEventListener("click", e => {
        p.parentElement === d1 ? d2.append(p) : d1.append(p);
    });
});


const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const mi = document.querySelector(".mystery");

function setColor(el, color = false) {
    if (color) {
        el.style.backgroundColor = getColor(255, 255, 255, 20);
    } else {
        el.style.backgroundImage = setGrad();
    }
}

// box.onclick = function(e) {
//     console.log(e);
//     this.style.background = setColor(this, true);
// }
let clicker = 0;
// box.onclick = e => {
//     e.target.lastElementChild.innerHTML = `Clicked ${++clicker} times`;
// }

/*
    metaKey (Cmd/Win)
    ctrlKey
    altKey
    shiftKey
*/

box.addEventListener("click", function(e) {
    // console.log(e);
    this.style.background = setColor(this, true);
});

box.addEventListener("click", e => {
    e.stopPropagation();
    // console.log(e.target);
    if (e.target.classList.contains("box")) {
        e.target.lastElementChild.innerHTML = `Clicked ${++clicker} times`;
    } else {
        e.target.parentElement.lastElementChild.innerHTML = `Clicked ${++clicker} times`;
    }
});

btn.addEventListener("click", e => {
    e.preventDefault(); // Прервать события по умолчанию (form / a / input / button)
    e.stopPropagation();
    e.target.classList.toggle("sparkle");
});

// bubble => btn(click) -> box(click) -> body(click)


const list = document.querySelectorAll("li");

const updTwilight = el => {
    list.forEach(li => {
        if (li !== el && li.classList.contains("twilight")) {
            li.classList.remove("twilight");
        } 
    })
}
list.forEach(li => {
    li.addEventListener("click", function(e) {
        e.stopPropagation();
        this.classList.add("twilight");
        updTwilight(this);
    });
})

const setItem = (right) => {
    let tag = Array.from(list).filter(l => l.classList.contains("twilight"))[0];
    if (!tag) {
        tag = right ? list[list.length - 1] : list[0];
        tag.classList.add("twilight");
    } else {
        if (right && tag !== list[0]) {
            tag.previousElementSibling.classList.add("twilight");
            updTwilight(tag.previousElementSibling);
        } else if (!right && tag !== list[list.length - 1]) {
            tag.nextElementSibling.classList.add("twilight");
            updTwilight(tag.nextElementSibling);
        }
    }
}

document.body.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "ArrowRight":
            setItem();
            break;
        case "ArrowLeft":
            setItem(true);
            break;
    }
})
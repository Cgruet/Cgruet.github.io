console.log(window.innerWidth);
const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => window.open("index.html","_self"));
const owners = document.querySelectorAll(".owner");
const helmets = document.querySelectorAll(".helmet-fixture");
resizeOwner(owners);
//resizeHelmet(helmets)
window.addEventListener("resize", () => {
    resizeOwner(owners);
    resizeHelmet(helmets);
});

function resizeOwner(items) {
    items.forEach((item) => {
        item.removeAttribute('class');
        if (window.innerWidth > 2000){
            item.classList.add("owner");
        } else if (window.innerWidth > 1600) {
            item.classList.add("owner4");
        } else if (window.innerWidth > 1200) {
            item.classList.add("owner3");
        } else if (window.innerWidth > 800) {
            item.classList.add("owner2");
        } else {
            item.classList.add("owner1");
        }
    })
}

function resizeHelmet(items) {
    items.forEach((item) => {
        item.removeAttribute('class');
        if (window.innerWidth > 2000){
            item.classList.add("helmet-fixture");
        } else if (window.innerWidth > 1600) {
            item.classList.add("helmet-fixture4");
        } else if (window.innerWidth > 1200) {
            item.classList.add("helmet-fixture3");
        } else if (window.innerWidth > 800) {
            item.classList.add("helmet-fixture2");
        } else {
            item.classList.add("helmet-fixture1");
        }
    })
}
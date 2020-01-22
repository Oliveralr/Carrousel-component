// just querying the DOM...like a boss!
let links = document.querySelectorAll(".itemLinks"); 
let wrapper = document.querySelector("#wrapper");

// provides a pointer to the currently displayed item
let activeLink = 0;

// set up the event listeners
for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener("click", setClickedItem, false);
      // identify the item for the activeLink
    link.itemID = i;
}

links[activeLink].classList.add("active");

const setClickedItem = (e) => {
    removeActiveLinks();
    let clickedLink = e.target;

    activeLink = clickedLink.itemID; 
    changePosition(clickedLink);
}
    
const removeActiveLinks = () => {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active"); 
    }
}

// Handle changing the slider position as well as ensure // the correct link is highlighted as being active 
const changePosition = (link) => {
    let position = link.getAttribute("data-pos");
    let translateValue = "translate3d(" + position + ", 0px, 0)";
    
    wrapper.style.transform = translateValue; 
    link.classList.add("active");
}

//Status message -- should be deleted, this was added as proof-error message.
console.log("Script is Working!");

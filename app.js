const mainEl = document.querySelector("main");

console.log(mainEl);

// Setting the Back color using our var method to grab and item from css

mainEl.style.backgroundColor = "var(--main-bg)";

// Creating on HTML Element
const h1 = document.createElement("H1");

// Attaching text to our h1 we created 
h1.innerHTML = "DOM Manipulation";

// Appending my H1 I created to my main container
mainEl.appendChild(h1);

// Add a class name to html elment
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");

// set the height to 100%
topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

const menuLinks = [
    {text: "about", href: "/about"},
    {text: "catalog", href: "/catalog"},
    {text: "orders", href: "/orders"},
    {text: "account", href: "/orders"},
];

menuLinks.forEach((link) => {
    // Create Anchor element
    const aElement = document.createElement("a");
    // added Href
    aElement.href = link.href;
    // added text content 
    aElement.textContent = link.text;
    // appended to topmenu
    topMenuEl.appendChild(aElement);
});


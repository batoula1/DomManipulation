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
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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

const subMenuEl = document.querySelector("#sub-menu");

subMenuEl.style.height = "100%";

subMenuEl.backgroundColor = "var(--sub-menu-bg)";

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

subMenuEl.style.top = "0";

const topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(EventTarget.tagName);
    if(event.target.tagName !== "A") return;

// topMenuLinks.forEach(link =>{
//     if (link == event.target) { link.classList.toggle("active");
//     } else { link.classList.remove("action");
//     }
// }
// })
const linkText = event.target.textContent.toLowerCase()
const linkObject = menuLinks.find((link) => link.text === linkText);

if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    subMenuEl.style.top = "0";
} else {document
    .querySelectorAll("#top-menu a")
    .forEach((a) => a.classList.remove("active"));
    event.target.classList.add("active");
    if (linkObject.subLinks) {
        subMenuEl.style.top = "100%";
        buildSubmenu(linkObject.subLinks);
    } else {
        subMenuEl.style.top = "0";
    }
}
});

function buildSubmenu(subLinks){
    subMenuEl.innerHTML = ""

    subLinks.forEach((link)=>{
        const aElement = document.createElement("a");
        aElement.href = link.ref;
        aElement.textContent = link.text;
        subMenuEl.appendChild(aElement);
     });
}

subMenuEl.addEventListener("click" , (event) => {
    event.preventDefault();

    if (event.target.tagName !== "A") return;

    console.log("submenu Link clicked", event.target.textContent);

    subMenuEl.style.top = "0";

    document
    .querySelectorAll("#top-menu a")
    .forEach((a) => a.classList.remove("active"));
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});



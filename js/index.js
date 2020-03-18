const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ------ NavBar ---------- //
const newLink1 = document.createElement("a");
const newLink2 = document.createElement("a");

document.querySelector("nav").appendChild(newLink1);
document.querySelector("nav").appendChild(newLink2);

let navBar = document.querySelectorAll("nav a");
let navBarImage = document.querySelector("#logo-img");

navBar[0].textContent = siteContent.nav["nav-item-1"];
navBar[1].textContent = siteContent.nav["nav-item-2"];
navBar[2].textContent = siteContent.nav["nav-item-3"];
navBar[3].textContent = siteContent.nav["nav-item-4"];
navBar[4].textContent = siteContent.nav["nav-item-5"];
navBar[5].textContent = siteContent.nav["nav-item-6"];

navBar.forEach(navItem => navItem.style.color = "green");



newLink1.textContent = "Blog";
newLink2.textContent = "Login";


// navBar.appendChild(newLink2);

// ------ CTA ---------- //
let ctaHeader = document.querySelector(".cta .cta-text h1");
ctaHeader.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector(".cta .cta-text button");
ctaButton.textContent = siteContent.cta.button;

let ctaImage = document.querySelector("#cta-img");
ctaImage.src = siteContent.cta["img-src"];

// ------ Main Content ---------- //
const contentHeaders = document.querySelectorAll(".main-content h4");
const content = document.querySelectorAll(".main-content p");
const contentImage = document.querySelector("#middle-img");

contentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
content[0].textContent = siteContent["main-content"]["features-content"];

contentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
content[1].textContent = siteContent["main-content"]["about-content"];

contentImage.src = siteContent["main-content"]["middle-img-src"];

contentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
content[2].textContent = siteContent["main-content"]["services-content"];

contentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
content[3].textContent = siteContent["main-content"]["product-content"];

contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
content[4].textContent = siteContent["main-content"]["vision-content"];

// ------ Contact ---------- //
document.querySelector(".contact h4").textContent = siteContent.contact["contact-h4"];
const contactInfo = document.querySelectorAll(".contact p");

contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

// ------ Footer ---------- //
document.querySelector("footer p").textContent = siteContent.footer.copyright;
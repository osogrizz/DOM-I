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

// nav links 
let navigation = document.querySelectorAll('a');
for (let i = 0; i < navigation.length; i++) {
  navigation[i].textContent = siteContent.nav[`nav-item-${[i]}`];
  navigation[i].style.color = "green";
}
let first = document.createElement('a');
first.style.color = "green";
first.textContent = "Alpha"
navigation[0].prepend(first)

let last = document.createElement('a');
last.style.color = "green";
last.textContent = "Omega";

let nav = document.querySelector('nav');
nav.appendChild(last)

// header-img
let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// header h1 and button
let headerCTA = document.querySelector('.cta-text');
// console.log(headerCTA.firstElementChild);
headerCTA.firstElementChild.textContent = siteContent.cta.h1
headerCTA.lastElementChild.textContent = siteContent.cta.button

// main-content

// middle-img
let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// upper-text
let upperText = document.querySelector('.top-content');
let upperText1 = upperText.firstElementChild;
upperText1.firstElementChild.textContent = siteContent["main-content"]["features-h4"];
upperText1.lastElementChild.textContent = siteContent["main-content"]["features-content"];

upperText2 = upperText.lastElementChild;
upperText2.firstElementChild.textContent = siteContent["main-content"]["about-h4"];
upperText2.lastElementChild.textContent = siteContent["main-content"]["about-content"];

// bottom-text
let lowerText = document.querySelector(".bottom-content");
let lowerText1 = lowerText.firstElementChild;
lowerText1.firstElementChild.textContent = siteContent["main-content"]["services-h4"];
lowerText1.lastElementChild.textContent = siteContent["main-content"]["services-content"];

let lowerText2 = lowerText.firstElementChild.nextElementSibling;
lowerText2.firstElementChild.textContent = siteContent["main-content"]["product-h4"];
lowerText2.lastElementChild.textContent = siteContent["main-content"]["product-content"];

let lowerText3 = lowerText.lastElementChild;
lowerText3.firstElementChild.textContent = siteContent["main-content"]["vision-h4"];
lowerText3.lastElementChild.textContent = siteContent["main-content"]["vision-content"];

// contact

let contactText = document.querySelector('.contact');
contactText.firstElementChild.textContent = siteContent["contact"]["contact-h4"];
contactText.firstElementChild.nextElementSibling.textContent = siteContent["contact"]["address"];
let phone = contactText.firstElementChild.nextElementSibling;
phone.nextElementSibling.textContent = siteContent["contact"]["phone"];
contactText.lastElementChild.textContent = siteContent["contact"]["email"];

// fontLanguageOverride: 
let footer = document.querySelector('footer');
footer.firstElementChild.textContent = siteContent["footer"]["copyright"];

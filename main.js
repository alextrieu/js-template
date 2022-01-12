// Main 
const main = document.createElement('main');
document.body.appendChild(main);
main.classList.add('main_section');

// Heading

const header = document.createElement('header');
const title = document.createElement('h1');
title.textContent = "Title";
header.appendChild(title);
main.appendChild(header);
header.classList.add('header_styling');

// div container

const container = document.createElement('div');
main.appendChild(container);
container.classList.add('flex_container')

// nav

const navigation = document.createElement('nav');
const navigation_header = document.createElement('h1');
navigation_header.textContent = "Navigation"
navigation.appendChild(navigation_header);
container.appendChild(navigation);
navigation.classList.add('background_color');

// section article

const article = document.createElement('section');
const article_header = document.createElement('h1');
article_header.textContent = "Article";
article.appendChild(article_header);
container.appendChild(article);
article.classList.add('background_color');

// aside ads

const ad = document.createElement('aside');
const ad_header = document.createElement('h1');
ad_header.textContent = "Advertisements";
ad.appendChild(ad_header);
container.appendChild(ad);
ad.classList.add('background_color');

// footer

const footer = document.createElement('footer');
const footer_header = document.createElement('h1');
footer_header.textContent = "Footer";
footer.appendChild(footer_header);
main.appendChild(footer);
footer.classList.add('footer_styling');


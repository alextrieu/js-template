// body
const body = document.querySelector('body');
body.classList.add('gridContainer');

// script tag
const jsScript = document.querySelector('script');

// Heading

const header = document.createElement('header');
const title = document.createElement('h1');
title.textContent = "Title";
header.appendChild(title);
document.body.insertBefore(header, jsScript);
header.classList.add('header');


// nav

const navigation = document.createElement('nav');
const navigation_header = document.createElement('h1');
navigation_header.textContent = "Navigation"
navigation.appendChild(navigation_header);
document.body.insertBefore(navigation, jsScript);
navigation.classList.add('backgroundColor', 'nav');

// section article

const article = document.createElement('section');
const article_header = document.createElement('h1');
article_header.textContent = "Article";
article.appendChild(article_header);
document.body.insertBefore(article, jsScript);
article.classList.add('backgroundColor', 'article');

// aside ads

const ad = document.createElement('aside');
const ad_header = document.createElement('h1');
ad_header.textContent = "Advertisements";
ad.appendChild(ad_header);
document.body.insertBefore(ad, jsScript);
ad.classList.add('backgroundColor', 'ad');


// footer

const footer = document.createElement('footer');
const footer_header = document.createElement('h1');
footer_header.textContent = "Footer";
footer.appendChild(footer_header);
document.body.insertBefore(footer, jsScript);
footer.classList.add('footer');



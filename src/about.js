export function aboutPage() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('card-container');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.setAttribute('src', './images/PNB_Logo.png');

    const aboutTitle = document.createElement('div');
    aboutTitle.classList.add('about-title');
    aboutTitle.innerHTML = "ABOUT";

    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text');
    aboutText.innerHTML = "Two brother-in-laws, one with a passion for pizza and the other a passion for beer, set forth to create the perfect restaurant. Parring the perfect beer with the perfect slice of pizza. "

    container.appendChild(logo);
    container.appendChild(aboutTitle);
    container.appendChild(aboutText);
    content.appendChild(container);
}
export function homePage() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('card-container');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.setAttribute('src', './images/PNB_Logo.png');

    const homeText = document.createElement('div');
    let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    homeText.classList.add('home-text');
    homeText.innerHTML = text;

    container.appendChild(logo);
    container.appendChild(homeText);
    content.appendChild(container);
}
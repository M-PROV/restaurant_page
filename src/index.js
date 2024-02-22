import { homePage } from "./home.js";
import { aboutPage } from "./about.js";
import { menuPage } from "./menu.js";
import './style.css';

//Function to show home page 
function showHomePage() {
    //Reset the content and load the home page
    resetContent();
    homePage();
}

//Function to show the menu page
function showMenuPage() {
    //Reset the content and load the menu page
    resetContent();
    menuPage();
}

//Function to show the about page
function showAboutPage() {
    //Reset the content and load the about page
    resetContent();
    aboutPage();
}

//Function to reset the content
function resetContent() {
    const content = document.getElementById('content');
    content.innerHTML = ''; //Clear the content
}

//Add event listeners to the nav buttons
const homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', showHomePage);

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', showMenuPage);

const aboutButton = document.getElementById('about-button');
aboutButton.addEventListener('click', showAboutPage);

//Show the home page by default when script is executed
showHomePage();
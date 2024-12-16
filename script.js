import { CustomVirtualDOM } from './virtualDOM/customVirtualDOM.js';

import Navbar from './pages/navbar.js';
import Footer from './pages/footer.js';

import Home from './pages/home.js';
import WhyCustomVDOM from './pages/whyCustomVDOM.js';
import AboutMe from './pages/aboutMe.js';
import ContactMe from './pages/contactMe.js';


let previousVdom = null;

function router() {
    const root = document.getElementById('z-content');
    const currentPage = window.location.pathname || '/'; 

    let page;
    switch (currentPage) {
        case '/':
            page = Home();
            break;
        case '/why-custom-vdom':
            page = WhyCustomVDOM();
            break;
        case '/aboutme':
            page = AboutMe();
            break;
        case '/contactme':
            page = ContactMe();
            break;
        default:
            page = Home(); 
            break;
    }


    const app = `
        ${Navbar()}
        ${page}
        ${Footer()}
    `;

    CustomVirtualDOM(root, app, previousVdom);
    previousVdom = app; 
}


window.addEventListener('popstate', router); 
window.addEventListener('DOMContentLoaded', router); 

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const path = e.target.getAttribute('href');
        window.history.pushState({}, '', path);
        router();
    }
});

export async function createHeader(navLinks) {
    const response = await fetch('./components/header/header.html');
    const template = await response.text();

    const header = document.createElement('header');
    header.innerHTML = template;

    const navLinksList = header.querySelector('.nav-links');
    navLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        navLinksList.appendChild(li);
    });

    const hamburger = header.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        navLinksList.classList.toggle('active');
    });

    return header;
}
export async function createAbout() {
    const response = await fetch('./components/about/about.html');
    const template = await response.text();
    const section = document.createElement('section');
    section.id = 'about';
    section.innerHTML = template;
    return section;
}


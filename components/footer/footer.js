export async function createFooter() {
    const response = await fetch('./components/footer/footer.html');
    const template = await response.text();
    const footer = document.createElement('footer');
    footer.innerHTML = template;
    return footer;
}
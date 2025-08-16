export async function createContact() {
    const contactData = [
        { icon: "📞", title: "Phone", link: "tel:+96181979439", text: "+961 81979439" },
        { icon: "✉️", title: "Email", link: "mailto:yehya.alkhateeb@gmail.com", text: "yehya.alkhateeb@gmail.com" },
        { icon: "🔗", title: "LinkedIn", link: "https://www.linkedin.com/in/yehya-alkhateeb", text: "Professional Profile" },
        { icon: "🔧", title: "GitHub", link: "https://github.com/YEHYA-ALKHATEEB", text: "Code Portfolio" },
        { icon: "📍", title: "Location", link: "#", text: "Aley, Mount Lebanon" }
    ];
    
    const response = await fetch('./components/contact/contact.html');
    const template = await response.text();

    const section = document.createElement('section');
    section.id = 'contact';
    section.classList.add('section');
    section.innerHTML = template;

    const contactGrid = section.querySelector('.contact-grid');
    contactData.forEach(item => {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item', 'fade-in');
        
        contactItem.innerHTML = `
            <div class="contact-icon">${item.icon}</div>
            <h3>${item.title}</h3>
            ${item.link && item.link !== '#' ? `<a href="${item.link}" target="_blank">${item.text}</a>` : `<p>${item.text}</p>`}
        `;
        contactGrid.appendChild(contactItem);
    });

    return section;
}
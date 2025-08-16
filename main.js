import { createHeader } from './components/header/header.js';
import { createAbout } from './components/about/about.js';
import { createSkills } from './components/skills/skills.js';
import { createExperience } from './components/experience/experience.js';
import { createEducation } from './components/education/education.js';
import { createProjects } from './components/projects/projects.js';
import { createContact } from './components/contact/contact.js';
import { createFooter } from './components/footer/footer.js';

import { initSmoothScrolling, initFadeInOnScroll } from './utils/utils.js';

document.addEventListener('DOMContentLoaded', async () => {
    const appContainer = document.getElementById('app');

    // Fetch dynamic data
    const [navData, projectsData, aboutData] = await Promise.all([
        fetch('./data/nav.json').then(response => response.json()),
        fetch('./data/projects.json').then(response => response.json()),
        fetch('./data/about.json').then(response => response.json())
    ]);

    // Render components and append to the app container
    appContainer.appendChild(await createHeader(navData));
    appContainer.appendChild(await createAbout(aboutData));
    appContainer.appendChild(await createSkills());
    appContainer.appendChild(await createExperience());
    appContainer.appendChild(await createEducation());
    appContainer.appendChild(await createProjects(projectsData));
    appContainer.appendChild(await createContact());
    appContainer.appendChild(await createFooter());

    // Initialize utility functions
    initSmoothScrolling();
    initFadeInOnScroll();
});
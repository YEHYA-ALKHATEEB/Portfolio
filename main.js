// This file is the "Main" entry point for the application.
// It orchestrates the fetching of data and the rendering of components.

import { createHeader } from './components/header/header.js';
import { createAbout } from './components/about/about.js';
import { createSkills } from './components/skills/skills.js';
import { createExperience } from './components/experience/experience.js';
import { createEducation } from './components/education/education.js';
import { createProjects } from './components/projects/projects.js';
import { createContact } from './components/contact/contact.js';
import { createFooter } from './components/footer/footer.js';

import { initSmoothScrolling, initFadeInOnScroll } from './utils/utils.js';
import { initProjectHandler } from './project-handler.js'; // Import the new project handler

let projectsData = [];

document.addEventListener('DOMContentLoaded', async () => {
    const appContainer = document.getElementById('app');

    // Fetch dynamic data
    try {
        const [navData, projectsDataResponse, aboutData] = await Promise.all([
            fetch('./data/nav.json').then(response => response.json()),
            fetch('./data/projects.json').then(response => response.json()),
        ]);
        projectsData = projectsDataResponse;

        // Render components and append to the app container
        // We add a common class "app-section" to all main sections for easy targeting later.
        const headerElement = await createHeader(navData);
        headerElement.classList.add('app-section');
        const aboutElement = await createAbout();
        aboutElement.classList.add('app-section');
        const skillsElement = await createSkills();
        skillsElement.classList.add('app-section');
        const experienceElement = await createExperience();
        experienceElement.classList.add('app-section');
        const educationElement = await createEducation();
        educationElement.classList.add('app-section');
        const projectsElement = await createProjects(projectsData);
        projectsElement.classList.add('app-section');
        const contactElement = await createContact();
        contactElement.classList.add('app-section');
        const footerElement = await createFooter();
        footerElement.classList.add('app-section');

        appContainer.appendChild(headerElement);
        appContainer.appendChild(aboutElement);
        appContainer.appendChild(skillsElement);
        appContainer.appendChild(experienceElement);
        appContainer.appendChild(educationElement);
        appContainer.appendChild(projectsElement);
        appContainer.appendChild(contactElement);
        appContainer.appendChild(footerElement);

        // Initialize the project handler with the main container and projects data
        initProjectHandler(appContainer, projectsData);

        // Initialize utility functions after all content is rendered.
        initSmoothScrolling();
        initFadeInOnScroll();
    } catch (error) {
        console.error('Failed to load data or render components:', error);
        appContainer.innerHTML = '<p>Failed to load portfolio data. Please check the file paths and ensure the components return DOM elements.</p>';
    }
});

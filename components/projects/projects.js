// This file is the "Projects Component" which generates a DOM element.

/**
 * Creates the HTML for a single project card.
 * @param {object} project The project data object.
 * @param {number} index The index of the project in the data array.
 * @returns {string} The HTML string for the project card.
 */
const createProjectCardHTML = (project, index) => {
    // Check if the image path looks like a file path (contains a dot or a slash)
    const hasFilePath = project.image.includes('.') || project.image.includes('/');
    
    // Choose the content based on the presence of a file path.
    const imageContent = hasFilePath
        ? `<img src="${project.image}" alt="${project.name}">`
        : `<div class="project-icon">${project.image}</div>`;

    const techTags = project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

    // The onclick attribute is removed. We will use a data attribute and a DOM event listener.
    return `
        <div class="project-card fade-in" data-index="${index}">
            <div class="project-image">
                ${imageContent}
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
            </div>
        </div>
    `;
};

/**
 * Creates and returns the DOM element for the projects section.
 * This function now dispatches a custom event when a project is clicked.
 * @param {Array<object>} projectsData The array of project data.
 * @returns {HTMLElement} The DOM element for the projects section.
 */
export const createProjects = (projectsData) => {
    const projectsSection = document.createElement('section');
    projectsSection.id = "projects";
    projectsSection.className = "section"; // Add a common class for later hiding/showing

    const projectCardsHTML = projectsData.map(createProjectCardHTML).join('');
    const projectsHTML = `
        <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <div class="projects-container">
                <div class="projects-grid">
                    ${projectCardsHTML}
                </div>
            </div>
        </div>
    `;
    
    projectsSection.innerHTML = projectsHTML;

    // We add a single event listener to the grid container using event delegation.
    // This is more efficient than adding a listener to each card.
    const projectsGrid = projectsSection.querySelector('.projects-grid');
    projectsGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.project-card');
        if (card) {
            const projectIndex = card.getAttribute('data-index');
            // Dispatch a custom event to notify the project handler
            const eventPayload = {
                bubbles: true,
                detail: { index: parseInt(projectIndex) }
            };
            card.dispatchEvent(new CustomEvent('project-selected', eventPayload));
        }
    });

    return projectsSection;
};

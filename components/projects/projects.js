// This file is the "Projects Component" which generates a DOM element.

// This function will generate the HTML for a single project card.
const createProjectCard = (project) => {
    // Check if the image path looks like a file path (contains a dot or a slash)
    const hasFilePath = project.image.includes('.') || project.image.includes('/');
    
    // Choose the content based on the presence of a file path.
    // If a file path is not found, a placeholder image is used.
    const imageContent = hasFilePath
        ? `<img src="${project.image}" alt="${project.name}">`
        : `<img src="https://placehold.co/150x150/e0e0e0/ffffff?text=No+Image" alt="${project.name}">`;

    const techTags = project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

    return `
        <div class="project-card fade-in" onclick="window.open('${project.link}', '_blank')">
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

// This function now returns a DOM element instead of an HTML string.
// It receives the projects data as a parameter from main.js.
export const createProjects = (projectsData) => {
    // Create the main container for the projects section
    const projectsSection = document.createElement('section');
    projectsSection.id = "projects";
    projectsSection.className = "section";

    // Build the inner HTML string for the component
    const projectCardsHTML = projectsData.map(createProjectCard).join('');
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
    
    // Set the innerHTML of the newly created element
    projectsSection.innerHTML = projectsHTML;

    // Return the DOM element so it can be appended by main.js
    return projectsSection;
};

// This file handles the logic for showing and hiding embedded projects.

let projectsData = [];
let appContainer = null;
let projectViewContainer = null;

/**
 * Renders a single project inside an iframe by hiding other sections.
 * @param {string} projectLink The URL of the project to embed.
 */
const renderProjectView = (projectLink) => {
    // Hide all main portfolio sections
    document.querySelectorAll('.app-section').forEach(section => {
        section.style.display = 'none';
    });

    // Create the HTML for the embedded project view with a skeleton loader
    const projectViewHTML = `
        <div class="tool-view-content">
            <button class="back-button" id="back-to-home-btn">&larr; Back to Portfolio</button>
            <h2 style="text-align: center;">Embedded Project</h2>
            <div class="loader-container">
                <div class="skeleton-loader">
                    <div class="skeleton-header"></div>
                    <div class="skeleton-text short"></div>
                    <div class="skeleton-text long"></div>
                    <div class="skeleton-text medium"></div>
                    <div class="skeleton-text short"></div>
                    <div class="skeleton-text long"></div>
                </div>
            </div>
            <iframe src="${projectLink}" class="tool-iframe" style="display: none;"></iframe>
        </div>
    `;

    // Clear and add the new view to our dedicated container
    projectViewContainer.innerHTML = projectViewHTML;
    projectViewContainer.style.display = 'block';

    const iframe = projectViewContainer.querySelector('.tool-iframe');
    const loader = projectViewContainer.querySelector('.loader-container');

    // Attach a load event listener to the iframe
    iframe.addEventListener('load', () => {
        // Hide the loader and show the iframe when it's finished loading
        if (loader) {
            loader.style.display = 'none';
        }
        if (iframe) {
            iframe.style.display = 'block';
        }
    });

    // Attach click listener to the back button
    document.getElementById('back-to-home-btn').addEventListener('click', () => {
        renderHomeView();
    });
};

/**
 * Renders the full portfolio home page by showing all sections.
 */
const renderHomeView = () => {
    // Hide the project view container
    projectViewContainer.style.display = 'none';
    projectViewContainer.innerHTML = '';
    
    // Show all main portfolio sections
    document.querySelectorAll('.app-section').forEach(section => {
        section.style.display = '';
    });
};

/**
 * Initializes the project handler by setting up event listeners and containers.
 * @param {HTMLElement} container The main app container element.
 * @param {Array<object>} data The projects data array.
 */
export const initProjectHandler = (container, data) => {
    appContainer = container;
    projectsData = data;

    // Create a container for the project view that we can show and hide
    projectViewContainer = document.createElement('div');
    projectViewContainer.className = 'project-view-container';
    projectViewContainer.style.display = 'none'; // Initially hidden
    appContainer.appendChild(projectViewContainer);

    // Listen for the custom event dispatched by the projects component
    // This is done on the document to catch the event from the dynamically created component
    document.addEventListener('project-selected', (event) => {
        const projectIndex = event.detail.index;
        const project = projectsData[projectIndex];
        if (project && project.link) {
            renderProjectView(project.link);
        }
    });
};

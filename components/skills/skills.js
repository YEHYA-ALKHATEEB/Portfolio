export async function createSkills() {
    const skillsData = {
        frontend: [
            "Angular", "Ionic", "Vue.js", "Nuxt.js", "React", "TypeScript",
            "JavaScript", "HTML5", "CSS3", "SCSS", "TailwindCSS", "Bootstrap"
        ],
        backend: [
            "Node.js", "Express.js", "Supabase", "Directus", "MongoDB",
            "MySQL", "SQLite", "RESTful APIs", "GraphQL"
        ],
        tools: [
            "Git", "GitHub", "Bitbucket", "Jira", "Docker",
            "AWS Amplify", "Firebase", "WordPress"
        ],
        specializations: [
            "Mobile-First Design", "Responsive UI/UX", "JWT Authentication",
            "OAuth", "Performance Optimization", "Agile Development"
        ]
    };

    const response = await fetch('./components/skills/skills.html');
    const template = await response.text();

    const section = document.createElement('section');
    section.id = 'skills';
    section.classList.add('section');
    section.innerHTML = template;

    const skillsGrid = section.querySelector('.skills-grid');

    for (const category in skillsData) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('skill-category', 'fade-in');
        
        const heading = document.createElement('h3');
        heading.textContent = formatCategoryName(category);
        categoryDiv.appendChild(heading);

        const listDiv = document.createElement('div');
        listDiv.classList.add('skill-list');
        skillsData[category].forEach(skill => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('skill-item');
            itemDiv.textContent = skill;
            listDiv.appendChild(itemDiv);
        });
        categoryDiv.appendChild(listDiv);
        skillsGrid.appendChild(categoryDiv);
    }
    
    return section;
}

function formatCategoryName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
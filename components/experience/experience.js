export async function createExperience() {
    const experienceData = [
        {
            title: "Frontend Developer",
            company: "InnovaticIdeas",
            date: "August 2024 – Present | Remote / Lebanon",
            description: [
                "Developed cross-platform mobile and web applications using Ionic + Angular framework",
                "Integrated Supabase for real-time database operations, user authentication, and file upload systems",
                "Implemented Directus as headless CMS for dynamic content management and administrative panels",
                "Created animated and interactive user interfaces in React using Framer Motion for enhanced user experience",
                "Built responsive WordPress websites utilizing existing themes and custom plugin integrations",
                "Collaborated in agile development environment using Git version control and modern development methodologies"
            ]
        },
        {
            title: "Software Developer",
            company: "Spark Boutique Digital",
            date: "February 2023 – June 2024 | Lebanon",
            description: [
                "Developed and maintained enterprise applications using Angular (versions 15-17)",
                "Built comprehensive admin CMS and cross-platform applications using Ionic Angular framework",
                "Integrated frontend applications with RESTful backend APIs and third-party services",
                "Gained practical experience with AWS Amplify, AppSync, and GraphQL technologies",
                "Developed reusable Angular components and responsive websites using Bootstrap framework",
                "Contributed to WordPress projects and designed custom blog sites using HTML/CSS",
                "Collaborated using Bitbucket, Jira, Redmine, and GitHub for project management and version control"
            ]
        },
        {
            title: "Full-Stack Developer",
            company: "NetVariant",
            date: "August 2020 – January 2023 | Lebanon",
            description: [
                "Utilized Moqui Framework and Java 8 for robust backend development and enterprise solutions",
                "Developed RESTful APIs and integrated Vue.js (versions 2 & 3) with backend systems",
                "Created modern user interfaces using Vue.js and Nuxt.js, styled with SCSS, Bootstrap, and Bulma",
                "Contributed to Drupal-based projects and maintained code quality standards",
                "Ensured project delivery using Jira for task management and Bitbucket for version control"
            ]
        }
    ];

    const response = await fetch('./components/experience/experience.html');
    const template = await response.text();

    const section = document.createElement('section');
    section.id = 'experience';
    section.classList.add('section');
    section.innerHTML = template;

    const container = section.querySelector('.experience-container');

    experienceData.forEach(job => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('experience-item', 'fade-in');

        const headerDiv = document.createElement('div');
        headerDiv.classList.add('experience-header');
        headerDiv.innerHTML = `
            <div class="experience-title">${job.title}</div>
            <div class="company-name">${job.company}</div>
            <div class="experience-date">${job.date}</div>
        `;
        itemDiv.appendChild(headerDiv);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('experience-description');
        const ul = document.createElement('ul');
        job.description.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            ul.appendChild(li);
        });
        descriptionDiv.appendChild(ul);
        itemDiv.appendChild(descriptionDiv);

        container.appendChild(itemDiv);
    });

    return section;
}
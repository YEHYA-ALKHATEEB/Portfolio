export async function createEducation() {
    const educationData = {
        degree: {
            title: "Bachelor's Degree in Computer Science",
            university: "Modern University for Business and Science (MUBS)",
            date: "September 2015 – August 2019 | Beirut, Lebanon",
            description: "Comprehensive foundation in computer science principles, software engineering, data structures, algorithms, and modern programming methodologies. Graduated with strong theoretical knowledge and practical experience in software development."
        },
        certifications: [
            "Cisco Certified Network Associate (CCNA)",
            "AWS Certified Developer – Associate (In Progress)",
            "Microsoft Office Specialist - Excel",
            "Microsoft Office Specialist - Word",
            "Microsoft Office Specialist - PowerPoint",
            "IC3 Certification - Microsoft"
        ]
    };

    const response = await fetch('./components/education/education.html');
    const template = await response.text();
    const section = document.createElement('section');
    section.id = 'education';
    section.classList.add('section');
    section.innerHTML = template;

    // Populate degree info
    const degreeItem = section.querySelector('.education-item');
    degreeItem.querySelector('.degree-title').textContent = educationData.degree.title;
    degreeItem.querySelector('.university-name').textContent = educationData.degree.university;
    degreeItem.querySelector('.education-date').textContent = educationData.degree.date;
    degreeItem.querySelector('p').textContent = educationData.degree.description;

    // Populate certifications
    const certificationsGrid = section.querySelector('.certifications-grid');
    educationData.certifications.forEach(cert => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('certification-item');
        itemDiv.textContent = cert;
        certificationsGrid.appendChild(itemDiv);
    });

    return section;
}
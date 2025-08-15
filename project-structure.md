my-portfolio/
│
├── index.html               # Root HTML file; minimal markup, only includes components
├── main.js                  # Entry point; imports all components and initializes app
│
├── utils/
│   └── utils.js             # Helper functions (DOM manipulation, animations, etc.)
│
├── data/
│   ├── nav.json             # JSON file storing navigation links dynamically
│   └── projects.json        # JSON file storing all project details for rendering
│
├── components/              # All reusable web components for the site
│   ├── header/              # Header/navigation bar component
│   │   ├── header.js        # JS class for <my-header>, dynamic nav loading
│   │   ├── header.html      # HTML template for header
│   │   └── header.css       # Component-specific styles
│   │
│   ├── about/               # About section
│   │   ├── about.js         # JS for rendering About content
│   │   ├── about.html       # HTML template
│   │   └── about.css        # CSS specific to About section
│   │
│   ├── skills/              # Skills section
│   │   ├── skills.js
│   │   ├── skills.html
│   │   └── skills.css
│   │
│   ├── experience/          # Professional experience section
│   │   ├── experience.js
│   │   ├── experience.html
│   │   └── experience.css
│   │
│   ├── education/           # Education and certifications
│   │   ├── education.js
│   │   ├── education.html
│   │   └── education.css
│   │
│   ├── projects/            # Projects section
│   │   ├── projects.js      # JS for rendering projects dynamically from projects.json
│   │   ├── projects.html    # HTML template for a project card container
│   │   └── projects.css     # CSS for cards, grid, hover, responsive layout
│   │
│   ├── contact/             # Contact section
│   │   ├── contact.js       # JS for rendering contact info
│   │   ├── contact.html     # HTML template
│   │   └── contact.css      # Component-specific styles
│   │
│   └── footer/              # Footer section
│       ├── footer.js
│       ├── footer.html
│       └── footer.css
│
├── images/                  # All project images and UI assets
│   ├── image-to-svg.png
│   ├── image-to-webp.png
│   ├── pdf-fusion.png
│   ├── pdfSplitter.png
│   ├── image-to-favicon.png
│   ├── aura-pdf.png
│   └── ai-compass.png
│
└── styles/
    └── global.css           # Global CSS (fonts, body styling, reset, utilities)

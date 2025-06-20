document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero section particles
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#818cf8' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#818cf8',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    // Initialize contact section particles with different configuration
    particlesJS('contact-particles', {
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: '#818cf8' },
            shape: { type: 'circle' },
            opacity: { value: 0.3, random: true },
            size: { value: 4, random: true },
            line_linked: {
                enable: true,
                distance: 200,
                color: '#818cf8',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'connect' },
                onclick: { enable: true, mode: 'bubble' },
                resize: true
            },
            modes: {
                connect: {
                    distance: 200,
                    line_linked: { opacity: 0.3 },
                    radius: 120
                },
                bubble: {
                    distance: 200,
                    size: 6,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });

    // Hide loading bar after page load
    setTimeout(() => {
        document.querySelector('.loading-bar').style.display = 'none';
    }, 1500);

    // Scroll progress bar
    window.addEventListener('scroll', () => {
        const scrollProgress = document.querySelector('.scroll-progress');
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = `${scrolled}%`;
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Section animations on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right').forEach(el => {
        animateOnScroll.observe(el);
    });

    // Active navigation highlight
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionBottom) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    });

    // Typing animation
    new Typed('.typed', {
        strings: ['1412', 'a Vibe Coder', 'a Dashboard Designer', 'N0 0ne'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add stagger animation to skill icons on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const icons = entry.target.querySelectorAll('.skill-icon-card');
                icons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.style.opacity = '1';
                        icon.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const skillsSection = document.querySelector('#skills .grid');
    if (skillsSection) {
        // Set initial state for animation
        const icons = skillsSection.querySelectorAll('.skill-icon-card');
        icons.forEach(icon => {
            icon.style.opacity = '0';
            icon.style.transform = 'translateY(20px)';
            icon.style.transition = 'all 0.5s ease-out';
        });
        observer.observe(skillsSection);
    }
});

// Project modal functionality
const projectDetails = {
    project1: {
        title: "Project Title 1",
        description: `
            <div class="relative overflow-hidden h-48">
                        <img src="./Chocolate_Sales.png" alt="Project 3"
                            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
            <h4 class="text-lg font-semibold mb-4">Overview</h4>
            <p class="mb-4">A detailed description of your first project. Explain what problem it solves and why you built it.</p>
            
            <h4 class="text-lg font-semibold mb-4">Key Features</h4>
            <ul class="list-disc pl-5 mb-4">
                <li>Responsive design for all devices</li>
                <li>Interactive user interface</li>
                <li>Data persistence using local storage</li>
                <li>Form validation and error handling</li>
            </ul>

            <h4 class="text-lg font-semibold mb-4">Technical Details</h4>
            <p class="mb-4">Built using HTML, CSS, and JavaScript. Implemented responsive design principles and modern JavaScript features.</p>

            <h4 class="text-lg font-semibold mb-4">Challenges & Solutions</h4>
            <p class="mb-4">Describe the main challenges you faced and how you overcame them. This shows your problem-solving abilities.</p>

            <div class="mt-4">
                <a href="#" class="text-indigo-400 hover:text-indigo-300 mr-4">View Live Demo</a>
                <a href="#" class="text-indigo-400 hover:text-indigo-300">GitHub Repository</a>
            </div>
        `
    },
    project2: {
        title: "Project Title 2",
        description: `
            <h4 class="text-lg font-semibold mb-4">Overview</h4>
            <p class="mb-4">Description of your second project, focusing on backend development and database management.</p>
            
            <h4 class="text-lg font-semibold mb-4">Key Features</h4>
            <ul class="list-disc pl-5 mb-4">
                <li>User authentication system</li>
                <li>Database CRUD operations</li>
                <li>RESTful API endpoints</li>
                <li>Data visualization</li>
            </ul>

            <h4 class="text-lg font-semibold mb-4">Technical Details</h4>
            <p class="mb-4">Developed using PHP, MySQL, and Bootstrap. Implemented secure user authentication and database operations.</p>

            <h4 class="text-lg font-semibold mb-4">Challenges & Solutions</h4>
            <p class="mb-4">Discuss the technical challenges you encountered and your approach to solving them.</p>

            <div class="mt-4">
                <a href="#" class="text-indigo-400 hover:text-indigo-300 mr-4">View Live Demo</a>
                <a href="#" class="text-indigo-400 hover:text-indigo-300">GitHub Repository</a>
            </div>
        `
    },
    project3: {
        title: "Discipline Management System for K-12 Students",
        description: `
         <div class="relative overflow-hidden h-48">
                        <img src="./assets/DMS.png" alt="Project 3"
                            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
            <h4 class="text-lg font-semibold mb-4">Overview</h4>
            <p class="mb-4"> We use boilerplate/template for UI and UX. We used AI to leverage the work of system. The creation of this system handle by single student. A web based system that is responsive also for mobile. </p>
            
            <h4 class="text-lg font-semibold mb-4">Key Features</h4>
            <ul class="list-disc pl-5 mb-4">
                <li>Dashboard for monitoring reports and usual violations. </li>
                <li>Real-time data visualization</li>
                <li>Use their old data of their students to automate the fillin-up in form.</li>
                <li>Sending Email report to specific student upon reporting.</li>
            </ul>

            <h4 class="text-lg font-semibold mb-4">Technical Details</h4>
            <p class="mb-4">Created using Html, CSS, JS, PhP, MySQL, Xampp, and Composer.</p>

            <h4 class="text-lg font-semibold mb-4">Impact & Results</h4>
            <p class="mb-4">This system we're going to be use by two group. First one is Guidance Council and last one are faculty staff. This system created to minimize the losses or reports and to monitor students behavior inside the campus. The goal of this system is easy to managed reports and tasks.</p>

            <div class="mt-4">
                
            </div>
        `
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const project = projectDetails[projectId];

    if (project) {
        modalTitle.textContent = project.title;
        modalContent.innerHTML = project.description;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}
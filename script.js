// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for fixed navbar
            behavior: 'smooth',
        });
    });
});

document.querySelectorAll('p a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for fixed navbar
            behavior: 'smooth',
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const projects = document.querySelectorAll('.project');
    const portfolioSection = document.getElementById('portfolio');

    const fadeInSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(fadeInSection, {
        threshold: 0.3
    });

    sections.forEach(section => observer.observe(section));
    projects.forEach(project => observer.observe(project));
    observer.observe(portfolioSection);
});



document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('surveyForm');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim(),
        };

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        }
    });
});

document.getElementById('seeAllProjects').addEventListener('click', () => {
    window.location.href = 'projects.html';
});

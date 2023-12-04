// script.js
// Wait for the DOM to be ready before executing the script
let slideIndex = 1;

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Auto-play the slideshow
setInterval(function () {
    plusSlides(1);
}, 5000);

// Display the first slide when the page loads
document.addEventListener('DOMContentLoaded', function () {
    showSlides(slideIndex);
});



// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Get all portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Add event listeners for hover effect
    portfolioItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            this.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseout', function () {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'scale(1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate the form before submission
        if (validateForm()) {
            // If validation passes, submit the form
            const name = encodeURIComponent(document.getElementById('name').value);
            const email = encodeURIComponent(document.getElementById('email').value);
            const message = encodeURIComponent(document.getElementById('message').value);

            const mailtoLink = `mailto:1shot1ctay@gmail.com?subject=Message from ${name}&body=${message}`;

            // Set the form action to the mailto link
            form.action = mailtoLink;
            form.submit();
}});

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation example, you can enhance this based on your requirements
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields');
            return false;
        }

        return true;
    }
});

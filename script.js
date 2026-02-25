// 1. Sticky Navbar Effect on Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Intersection Observer for "Fade Up" Animations
const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15, // Triggers when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it has faded in
        }
    });
}, appearOptions);

fadeElements.forEach(element => {
    appearOnScroll.observe(element);

});

document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    // Prevent the form from trying to refresh the page
    event.preventDefault();

    //  Get the values the user typed in
    const name = document.getElementById('senderName').value;
    const email = document.getElementById('senderEmail').value;
    const message = document.getElementById('senderMessage').value;

  
    const phoneNumber = "212708267705"; 

    // Format the message for WhatsApp
    const rawMessage = `*New Website Inquiry!*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
    
    // We have to encode it so spaces and line breaks work in the URL
    const encodedMessage = encodeURIComponent(rawMessage);

    //  Create the final WhatsApp link and open it
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  });

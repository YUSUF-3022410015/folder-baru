document.addEventListener("DOMContentLoaded", () => {

    const subtitleText = "Information Systems Student & Web Enthusiast";
    const subtitleElement = document.getElementById("hero-subtitle");
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < subtitleText.length) {
            subtitleElement.innerHTML += subtitleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    }
    setTimeout(typeWriter, 500);

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => scrollObserver.observe(el));

    const form = document.getElementById("contactForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        let isValid = true;
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            document.getElementById("nameError").classList.add("active");
            isValid = false;
        } else {
            document.getElementById("nameError").classList.remove("active");
        }

        if (email === "" || !email.includes("@") || !email.includes(".")) {
            document.getElementById("emailError").classList.add("active");
            isValid = false;
        } else {
            document.getElementById("emailError").classList.remove("active");
        }

        if (message === "") {
            document.getElementById("messageError").classList.add("active");
            isValid = false;
        } else {
            document.getElementById("messageError").classList.remove("active");
        }

        if (isValid) {
            alert("Pesan berhasil dikirim! (Ini hanya simulasi)");
            form.reset();
        }
    });
});
const faqs = document.querySelectorAll(".accordion-item");

faqs.forEach((faq) => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("active");
	})
});

document.getElementById("learn-more-link").addEventListener("click", function(event) {
    event.preventDefault(); // Previene la acción predeterminada del enlace

    var learnMoreLink = document.getElementById("learn-more-link");
    var hiddenText = document.getElementById("hidden-text");
    
    learnMoreLink.style.display = "none"; // Oculta el enlace "Learn More"
    hiddenText.style.display = "block"; // Muestra el texto adicional

	setTimeout(function() {
        hiddenText.style.opacity = 1;
    }, 10);
});



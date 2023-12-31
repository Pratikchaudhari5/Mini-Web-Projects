document.addEventListener("DOMContentLoaded", function() {
    
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector("h2");
        const answer = item.querySelector(".answer");

        question.addEventListener("click", function() {
            answer.classList.toggle("show");
        });
    });
});

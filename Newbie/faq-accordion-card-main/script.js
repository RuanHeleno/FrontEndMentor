const faq = document.getElementsByClassName("question");
const faqArrow = document.querySelectorAll('article img');

for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
            faqArrow[i].style.transform = 'scale(1, 1)';
        }
        else {
            body.style.display = "block";
            faqArrow[i].style.transform = 'scale(-1, -1)';
        }
    });
}
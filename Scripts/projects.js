document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".accordion-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;

            // Wenn schon offen, schließen
            if (content.classList.contains("open")) {
                content.classList.remove("open");
                content.style.maxHeight = null;
            } else {
            // Alle anderen schließen
            document.querySelectorAll(".accordion-content").forEach(c => {
                c.classList.remove("open");
                c.style.maxHeight = null;
                });
            // Dieses öffnen
                content.classList.add("open");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a section.
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
    });
});

// Keep the copyright year current.
document.getElementById("year").textContent =
    new Date().getFullYear();

// Keep a helpful filename prompt visible until each personal/project image exists.
document.querySelectorAll(".image-slot img").forEach((image) => {
    const imageSlot = image.closest(".image-slot");
    const updateImageState = () => {
        imageSlot.classList.toggle("is-empty", !image.complete || image.naturalWidth === 0);
    };

    image.addEventListener("load", updateImageState);
    image.addEventListener("error", updateImageState);
    updateImageState();
});

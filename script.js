document.querySelectorAll(".links a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents instant navigation

        const overlay = document.getElementById("overlay");
        const icon = document.getElementById("overlay-icon");

        // Get the correct fab class from the clicked button
        const clickedIcon = this.querySelector("i").className;
        icon.className = clickedIcon; // Apply the icon dynamically

        // Shows an overla with animation
        overlay.style.visibility = "visible";
        overlay.style.opacity = "1";
        icon.style.opacity = "1";
        icon.style.transform = "scale(1)";

        // Redirect after animation
        setTimeout(() => {
            window.location.href = this.href;
        }, 1200); // Delay for smooth transition
    });
});


document.querySelectorAll(".links a").forEach(link => {       // Event - Middle clickers
    link.addEventListener("mousedown", function(event) {
        if (event.button === 1) { // Middle click (mouse button 2)
            const overlay = document.getElementById("overlay");
            const icon = document.getElementById("overlay-icon");

            // Get the correct fab class from the clicked button
            const clickedIcon = this.querySelector("i").className;
            icon.className = clickedIcon; // Apply the icon dynamically

            // Shows overlay with animation
            overlay.style.visibility = "visible";
            overlay.style.opacity = "1";
            icon.style.opacity = "1";
            icon.style.transform = "scale(1)";

            // Auto-hide the overlay
            setTimeout(() => {
                overlay.style.opacity = "0";
                icon.style.opacity = "0";
                icon.style.transform = "scale(0.5)";

                setTimeout(() => {
                    overlay.style.visibility = "hidden";
                }, 500);
            }, 1000);

            // Allows the default middle-click behavior after a few millisec delay
            setTimeout(() => {
                window.open(this.href, "_blank"); // Opens in a new tab
            }, 200); // Small delay for smooth transition
        }
    });
});



document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });

document.addEventListener("contextmenu", function(event) {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
    }
  });

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".links a"); // Get all links inside .links div
    const copyrightLink = document.querySelector(".copyright a"); // Get the link inside .copyright

    if (links.length > 0) {
        const randomLink = links[Math.floor(Math.random() * links.length)]; // Pick a random link
        copyrightLink.href = randomLink.href; // Set the href of the copyright link
    }
});

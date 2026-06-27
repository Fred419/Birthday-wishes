window.onload = () => {

    setTimeout(() => {

        const loading = document.getElementById("loading-screen");

        loading.style.transition = "opacity 1s ease";
        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

            // Show the welcome message
            const open = confirm(
                "❤️ Welcome Akobabe ❤️\n\nI made something special just for you.\n\nTap OK to continue."
            );

            if (open) {
                window.location.href = "welcome.html";
            }

        }, 1000);

    }, 4000);

};
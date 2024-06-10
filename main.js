document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".img-carousel");

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll("img");
        const prevBtn = carousel.querySelector(".prev-btn");
        const nextBtn = carousel.querySelector(".next-btn");
        let currentIndex = 0;

        const showImage = index => {
            images.forEach((img, i) => {
                img.style.display = i === index ? "block" : "none";
                img.classList.toggle("active", i === index);
            });
        };

        const showNextImage = () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        };

        const showPrevImage = () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        };

        prevBtn.addEventListener("click", showPrevImage);
        nextBtn.addEventListener("click", showNextImage);

        images.forEach(img => {
            img.addEventListener("click", () => {
                const overlay = document.querySelector(".overlay");
                const overlayImg = overlay.querySelector(".overlay-content");
                const overlayPrevBtn = overlay.querySelector(".overlay-prev-btn");
                const overlayNextBtn = overlay.querySelector(".overlay-next-btn");
                let overlayIndex = Array.from(images).indexOf(img);

                const showOverlayImage = index => {
                    overlayImg.src = images[index].src;
                    overlayIndex = index;
                };

                const showOverlayNextImage = () => {
                    overlayIndex = (overlayIndex + 1) % images.length;
                    showOverlayImage(overlayIndex);
                };

                const showOverlayPrevImage = () => {
                    overlayIndex = (overlayIndex - 1 + images.length) % images.length;
                    showOverlayImage(overlayIndex);
                };

                overlay.style.display = "flex";
                showOverlayImage(overlayIndex);

                overlayPrevBtn.addEventListener("click", showOverlayPrevImage);
                overlayNextBtn.addEventListener("click", showOverlayNextImage);
                overlay.querySelector(".close-btn").addEventListener("click", () => {
                    overlay.style.display = "none";
                });
            });
        });

        showImage(currentIndex);
    });
});

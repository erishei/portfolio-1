// document.addEventListener("DOMContentLoaded", function() {
//     const buttons = document.querySelectorAll(".prev-btn, .next-btn");
//
//     buttons.forEach(button => {
//         button.addEventListener("mousedown", () => {
//             button.classList.add("active");
//         });
//         button.addEventListener("mouseup", () => {
//             button.classList.remove("active");
//         });
//         button.addEventListener("mouseleave", () => {
//             button.classList.remove("active");
//         });
//     });
// });
//
// document.addEventListener("DOMContentLoaded", function() {
//     const carousels = document.querySelectorAll(".img-carousel");
//
//     carousels.forEach(carousel => {
//         const images = carousel.querySelectorAll(".carousel-images img");
//         let currentImageIndex = 0;
//
//         // Function to show specific image
//         function showImage(index) {
//             images.forEach((img, idx) => {
//                 if (idx === index) {
//                     img.style.display = "block";
//                 } else {
//                     img.style.display = "none";
//                 }
//             });
//             currentImageIndex = index;
//         }
//
//         // Show the initial image
//         showImage(currentImageIndex);
//
//         // Add event listener to switch to the previous image
//         carousel.querySelector(".prev-btn").addEventListener("click", function() {
//             currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//             showImage(currentImageIndex);
//         });
//
//         // Add event listener to switch to the next image
//         carousel.querySelector(".next-btn").addEventListener("click", function() {
//             currentImageIndex = (currentImageIndex + 1) % images.length;
//             showImage(currentImageIndex);
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const buttons = document.querySelectorAll(".prev-btn, .next-btn");
//
//     buttons.forEach(button => {
//         button.addEventListener("mousedown", () => {
//             button.classList.add("active");
//         });
//         button.addEventListener("mouseup", () => {
//             button.classList.remove("active");
//         });
//         button.addEventListener("mouseleave", () => {
//             button.classList.remove("active");
//         });
//     });
//
//     const carousels = document.querySelectorAll(".img-carousel");
//
//     carousels.forEach(carousel => {
//         const images = carousel.querySelectorAll(".carousel-images img");
//         let currentImageIndex = 0;
//
//         // Function to show specific image
//         function showImage(index) {
//             images.forEach((img, idx) => {
//                 img.style.display = idx === index ? "block" : "none";
//             });
//             currentImageIndex = index;
//         }
//
//         // Show the initial image
//         showImage(currentImageIndex);
//
//         // Add event listener to switch to the previous image
//         carousel.querySelector(".prev-btn").addEventListener("click", function() {
//             currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//             showImage(currentImageIndex);
//         });
//
//         // Add event listener to switch to the next image
//         carousel.querySelector(".next-btn").addEventListener("click", function() {
//             currentImageIndex = (currentImageIndex + 1) % images.length;
//             showImage(currentImageIndex);
//         });
//
//         // Add event listener to open overlay with larger image
//         images.forEach(img => {
//             img.addEventListener("click", function() {
//                 const overlay = document.getElementById("image-overlay");
//                 const overlayImg = document.getElementById("overlay-img");
//                 overlayImg.src = img.src;
//                 overlay.style.display = "flex";
//             });
//         });
//     });
//
//     // Close overlay when clicking the close button
//     document.querySelector(".close-btn").addEventListener("click", function() {
//         document.getElementById("image-overlay").style.display = "none";
//     });
//
//     // Close overlay when clicking outside the image
//     document.getElementById("image-overlay").addEventListener("click", function(event) {
//         if (event.target === this) {
//             this.style.display = "none";
//         }
//     });
// });
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

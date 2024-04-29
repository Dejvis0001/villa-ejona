//Moving Animation
const elements = document.querySelectorAll(".fadeinleft");
const elements1 = document.querySelectorAll(".fade-in");
const elements2 = document.querySelectorAll(".fadeinright");
const elements3 = document.querySelectorAll(".fadeindown");
const elements4 = document.querySelectorAll(".fadeinup");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};
const callbacks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-left");
    }
  });
};
const callbacks1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};
const callbacks2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-right");
    }
  });
};
const callbacks3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-down");
    }
  });
};
const callbacks4 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-up");
    }
  });
};
let observer = new IntersectionObserver(callbacks, options);
let observer1 = new IntersectionObserver(callbacks1, options);
let observer2 = new IntersectionObserver(callbacks2, options);
let observer3 = new IntersectionObserver(callbacks3, options);
let observer4 = new IntersectionObserver(callbacks4, options);
elements.forEach((elements) => {
  observer.observe(elements);
});
elements1.forEach((elements1) => {
  observer1.observe(elements1);
});
elements2.forEach((elements2) => {
  observer2.observe(elements2);
});
elements3.forEach((elements3) => {
  observer3.observe(elements3);
});
elements4.forEach((elements4) => {
  observer4.observe(elements4);
});
//Index-Home
document.addEventListener('DOMContentLoaded', function () {
  // Initialize the carousel
  var myCarousel = new bootstrap.Carousel(document.getElementById('CarouselHead'), {
      interval: 5000 // Change image every 5 seconds
  });

  // Hover functionality for next and previous buttons
  var prevButton = document.querySelector('.carousel-control-prev');
  var nextButton = document.querySelector('.carousel-control-next');

  // Get carousel items and total number of items
  var carouselItems = document.querySelectorAll('.carousel-item');
  var totalItems = carouselItems.length;

  // Index of current active item
  var currentIndex = 0;

  // Function to update preview image
  function updatePreviewImage(index) {
      var nextIndex = (index + 1) % totalItems;
      var prevIndex = index - 1;
      if (prevIndex < 0) {
          prevIndex = totalItems - 1; // Wrap around to the last item
      }

      nextButton.style.backgroundImage = "url('" + carouselItems[nextIndex].querySelector('img').src + "')";
      prevButton.style.backgroundImage = "url('" + carouselItems[prevIndex].querySelector('img').src + "')";
  }

  // Initial preview update
  updatePreviewImage(currentIndex);

  // Show next photo when hovering over the next button
  nextButton.addEventListener('mouseenter', function () {
      updatePreviewImage(currentIndex);
  });

  // Show previous photo when hovering over the previous button
  prevButton.addEventListener('mouseenter', function () {
      updatePreviewImage(currentIndex);
  });

  // Listen to slide event to update currentIndex and preview
  myCarousel._element.addEventListener('slide.bs.carousel', function (event) {
      currentIndex = event.to;
      updatePreviewImage(currentIndex);
  });
});


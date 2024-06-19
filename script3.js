document.addEventListener('DOMContentLoaded', function () {
  let slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'inactive');
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.add('inactive');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 3000); // Change slide every 3 seconds

  // Form submit handler
  document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    const newSlide = document.createElement('div');
    newSlide.classList.add('slide');
    newSlide.innerHTML = `
      <p>"${review}" - ${name}</p>
      <p>Course: ${course}</p>
      <p>Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</p>
    `;

    document.querySelector('.slider').appendChild(newSlide);
    slides = document.querySelectorAll('.slide'); // Update slide list after adding new one
    showSlide(currentSlide); // Show current slide
    document.getElementById('reviewForm').reset();
    alert('Your review has been added!');
  });

  // Add mouse and keyboard events for animation
  const itemCards = document.querySelectorAll('.slide');

  itemCards.forEach(itemCard => {
    // Mouse events
    itemCard.addEventListener('mouseenter', function() {
      itemCard.classList.add('hover');
    });

    itemCard.addEventListener('mouseleave', function() {
      itemCard.classList.remove('hover');
    });

    // Keyboard events
    itemCard.addEventListener('focus', function() {
      itemCard.classList.add('hover');
    });

    itemCard.addEventListener('blur', function() {
      itemCard.classList.remove('hover');
    });
  });
});

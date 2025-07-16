const words = ["Python Developer", "Backend Developer", "Automation Enthusiast"];
let i = 0;
let wordIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const display = document.querySelector(".typing");
  const fullText = words[wordIndex];

  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
  } else {
    currentText = fullText.substring(0, currentText.length + 1);
  }

  display.textContent = currentText;

  let typeSpeed = isDeleting ? 70 : 140;

  if (!isDeleting && currentText === fullText) {
    typeSpeed = 1200;
    isDeleting = true;
  } else if (isDeleting && currentText === '') {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 300;
  }

  setTimeout(type, typeSpeed);
}

document.getElementById("readMoreBtn").addEventListener("click", function () {
  const moreText = document.getElementById("more");
  const btn = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
});


function toggleReadMore(button) {
  const card = button.closest('.service-card');
  const dots = card.querySelector('.dots');
  const moreText = card.querySelector('.more-text');

  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    dots.style.display = "inline";
    button.innerText = "Read More";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    button.innerText = "Read Less";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    const layers = card.querySelectorAll('.slide-layer');
    let index = 0;
    let interval;

    function showSlide() {
      layers.forEach((layer, i) => {
        layer.style.opacity = i === index ? '1' : '0';
      });
      index = (index + 1) % layers.length;
    }

    // Hover starts slideshow
    card.addEventListener('mouseenter', () => {
      index = 1; // Start from title
      showSlide();
      interval = setInterval(showSlide, 2000);
    });

    // Mouse leave resets to image
    card.addEventListener('mouseleave', () => {
      clearInterval(interval);
      index = 0;
      showSlide();
    });

    // Initial load shows static image
    showSlide();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach((section) => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactorm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        form.reset();
        status.textContent = "✅ Message sent successfully!";
        status.style.color = "#00e0ff";
      } else {
        const result = await response.json();
        status.textContent = result.error || "❌ Something went wrong. Please try again.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "❌ Network error. Please check your connection.";
      status.style.color = "red";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animated-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach((section) => observer.observe(section));
});



document.addEventListener('DOMContentLoaded', type);

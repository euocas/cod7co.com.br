const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

function updateCursorPosition(event) {
  const x = event.clientX;
  const y = event.clientY;

  cursor.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
  ring.style.transform = `translate(${x - 18}px, ${y - 18}px)`;
}

document.addEventListener('mousemove', updateCursorPosition);

function animateCursor() {
  requestAnimationFrame(animateCursor);
}

animateCursor();

document.querySelectorAll('a, button').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    ring.style.width = '56px';
    ring.style.height = '56px';
    ring.style.borderColor = 'rgba(123,47,255,0.9)';
  });

  element.addEventListener('mouseleave', () => {
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.borderColor = 'rgba(123,47,255,0.5)';
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

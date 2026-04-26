
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('grid-container');
  const dotSize = 10;

  const columns = Math.ceil(window.innerWidth / dotSize);
  const rows = Math.ceil(window.innerHeight / dotSize);
  const totalDots = columns * rows;

  for (let i = 0; i < totalDots; i++ ) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    container.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');
  const radius = 50; // Interaction radius

  document.addEventListener('mousemove', (e) => {
    dots.forEach(dot => {
      const rect = dot.getBoundingClientRect();
      const dotX = rect.left + rect.width / 2;
      const dotY = rect.top + rect.height / 2;

      const distance = Math.sqrt((e.clientX - dotX)**2 + (e.clientY - dotY)**2);

      if (distance < radius) {
        dot.style.backgroundColor = '#ffffff';
      } else {
        dot.style.backgroundColor = '#313131';
      }

    });
  });
});

const tocContainer = document.querySelector('.toc-container');
const tocToggle = document.querySelector('.toc-toggle');
const tocLinks = document.querySelectorAll('.toc-item a');
const articleContainer = document.querySelector('.article-container')?.parentElement;

// Alterna el TOC al hacer clic en el botón
tocToggle.addEventListener('click', () => {
  tocContainer.classList.toggle('open');
  articleContainer?.classList.toggle('toc-open');
});

// Desplazamiento suave al hacer clic en un enlace del TOC
tocLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (window.innerWidth <= 768) {
      tocContainer.classList.remove('open');
      articleContainer?.classList.remove('toc-open');
    }
    
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  });
});

// Cierra el TOC al hacer clic fuera de él
document.addEventListener('click', (event) => {
  if (!tocContainer.contains(event.target) && !tocToggle.contains(event.target) && tocContainer.classList.contains('open')) {
    tocContainer.classList.remove('open');
    articleContainer?.classList.remove('toc-open');
  }
});

// Observa los encabezados y resalta el enlace activo
const observer = new IntersectionObserver((entries) => {
  let maxRatio = 0, activeHeading = null;
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
      maxRatio = entry.intersectionRatio;
      activeHeading = entry.target;
    }
  });
  
  if (activeHeading) {
    tocLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.toc-item a[href="#${activeHeading.id}"]`);
    activeLink?.classList.add('active');
    activeLink?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}, { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-80px 0px -40% 0px' });

document.querySelectorAll('.article-content h2, .article-content h3, .article-content h4, .article-content h5, .article-content h6')
  .forEach(heading => observer.observe(heading));
